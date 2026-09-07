
const state={player:null,time:null,tag:null,search:"",sort:"default"};
const grid=document.querySelector("#gameGrid");
const resultCount=document.querySelector("#resultCount");
const empty=document.querySelector("#emptyState");
const modal=document.querySelector("#gameModal");
const modalContent=document.querySelector("#modalContent");

const IMAGE_VERSION = "2";

const tagDisplay=["파티","가볍게","전략","추리","협력","블러핑","정체숨기기","트릭테이킹","스토리"];
const tagContainer=document.querySelector("#tagFilters");
tagDisplay.forEach(tag=>{
  const b=document.createElement("button");
  b.textContent=({파티:"😂 파티",가볍게:"😌 가볍게",전략:"🧠 전략",추리:"🕵️ 추리",협력:"🤝 협력",블러핑:"😈 블러핑",정체숨기기:"🎭 정체 숨기기",트릭테이킹:"🃏 트릭테이킹",스토리:"💬 이야기"})[tag]||tag;
  b.dataset.tag=tag; tagContainer.appendChild(b);
});

function playerText(players){
  const p=[...players];
  if(p.includes(8)) return `${p[0]}–8+명`;
  if(p.length===1) return `${p[0]}명`;
  return `${p[0]}–${p[p.length-1]}명`;
}
function stars(n){return "★".repeat(n)+"☆".repeat(4-n)}

function coverHTML(g, cls="cover"){
  const filename = g.image || (
    encodeURIComponent(
      g.en.toLowerCase()
        .replace(/[^a-z0-9]+/g,"-")
        .replace(/^-|-$/g,"")
    ) + ".jpg"
  );

  return `<div class="${cls}">
    <img src="images/${filename}?v=${IMAGE_VERSION}"
         alt="${g.name}"
         onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span class="placeholder" style="display:none">🎲</span>
    ${cls==="cover"?`<span class="mini">${stars(g.difficulty)}</span>`:""}
  </div>`;
}

function filtered(){
  let arr=GAMES.filter(g=>{
    if(state.player && !g.players.includes(state.player)) return false;
    if(state.time===20 && g.minutes>25) return false;
    if(state.time===60 && g.minutes>60) return false;
    if(state.time===999 && g.minutes<=60) return false;
    if(state.tag && !g.tags.includes(state.tag)) return false;
    if(state.search){
      const q=state.search.toLowerCase();
      if(!(g.name.toLowerCase().includes(q)||g.en.toLowerCase().includes(q))) return false;
    }
    return true;
  });
  if(state.sort==="easy") arr.sort((a,b)=>a.difficulty-b.difficulty);
  if(state.sort==="hard") arr.sort((a,b)=>b.difficulty-a.difficulty);
  if(state.sort==="short") arr.sort((a,b)=>a.minutes-b.minutes);
  if(state.sort==="long") arr.sort((a,b)=>b.minutes-a.minutes);
  return arr;
}

function render(){
  const arr=filtered();
  resultCount.textContent=arr.length;
  grid.innerHTML="";
  empty.hidden=arr.length!==0;
  arr.forEach(g=>{
    const card=document.createElement("article");
    card.className="card";
    card.innerHTML=`${coverHTML(g)}
      <div class="card-body">
        <h3>${g.name}</h3><div class="en">${g.en}</div>
        <div class="meta"><span>👥 ${playerText(g.players)}</span><span>⏱ ${g.time}</span></div>
        <p class="desc">${g.desc}</p>
        <div class="tags">${g.tags.slice(0,3).map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
      </div>`;
    card.onclick=()=>openModal(g);
    grid.appendChild(card);
  });
}

function openModal(g){
  modalContent.innerHTML=`${coverHTML(g,"modal-cover")}
    <div class="modal-body">
      <h2>${g.name}</h2><div class="en">${g.en}</div>
      <div class="meta"><span>👥 ${playerText(g.players)}</span><span>⏱ ${g.time}</span><span>난이도 ${stars(g.difficulty)}</span></div>
      <p class="desc">${g.desc}</p>
      <div class="tags">${g.tags.map(t=>`<span class="tag">#${t}</span>`).join("")}</div>
    </div>`;
  modal.showModal();
}
document.querySelector(".modal-close").onclick=()=>modal.close();
modal.addEventListener("click",e=>{if(e.target===modal)modal.close()});

function bindExclusive(container,key,attr,parse=x=>x){
  document.querySelector(container).addEventListener("click",e=>{
    const b=e.target.closest("button"); if(!b)return;
    const val=parse(b.dataset[attr]);
    state[key]=state[key]===val?null:val;
    document.querySelectorAll(`${container} button`).forEach(x=>x.classList.toggle("active",parse(x.dataset[attr])===state[key]));
    render();
  });
}
bindExclusive("#playerFilters","player","player",Number);
bindExclusive("#timeFilters","time","time",Number);
bindExclusive("#tagFilters","tag","tag",String);

document.querySelector("#searchInput").addEventListener("input",e=>{state.search=e.target.value.trim();render()});
document.querySelector("#sortSelect").addEventListener("change",e=>{state.sort=e.target.value;render()});
document.querySelector("#clearFilters").onclick=()=>{
  Object.assign(state,{player:null,time:null,tag:null,search:"",sort:"default"});
  document.querySelectorAll(".chips button").forEach(b=>b.classList.remove("active"));
  document.querySelector("#searchInput").value="";
  document.querySelector("#sortSelect").value="default";
  render();
};
render();
