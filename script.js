const IMAGE_VERSION = "4";
const state={player:null,time:null,tag:null,search:"",sort:"default"};
let currentLang = localStorage.getItem("boardgameLang") || "ko";

const grid=document.querySelector("#gameGrid");
const resultCount=document.querySelector("#resultCount");
const empty=document.querySelector("#emptyState");
const modal=document.querySelector("#gameModal");
const modalContent=document.querySelector("#modalContent");
const imageModal=document.querySelector("#imageModal");
const fullImage=document.querySelector("#fullImage");
const tagContainer=document.querySelector("#tagFilters");

const TAGS=["파티","가볍게","전략","추리","협력","블러핑","정체숨기기","트릭테이킹","스토리"];

const TAG_LABELS={
  ko:{
    "파티":"😂 파티","가볍게":"😌 가볍게","전략":"🧠 전략","추리":"🕵️ 추리","협력":"🤝 협력",
    "블러핑":"😈 블러핑","정체숨기기":"🎭 정체 숨기기","트릭테이킹":"🃏 트릭테이킹","스토리":"💬 이야기"
  },
  en:{
    "파티":"😂 Party","가볍게":"😌 Light","전략":"🧠 Strategy","추리":"🕵️ Deduction","협력":"🤝 Cooperative",
    "블러핑":"😈 Bluffing","정체숨기기":"🎭 Hidden Roles","트릭테이킹":"🃏 Trick-taking","스토리":"💬 Storytelling"
  }
};

const TAG_NAMES_EN={
  "파티":"Party","가볍게":"Light","전략":"Strategy","추리":"Deduction","협력":"Co-op","블러핑":"Bluffing",
  "정체숨기기":"Hidden Roles","트릭테이킹":"Trick-taking","스토리":"Story","카드":"Cards","주사위":"Dice",
  "푸시유어럭":"Push Your Luck","엔진빌딩":"Engine Building","경쟁":"Competitive","테마":"Thematic","순발력":"Reflexes",
  "토론":"Discussion","1대다수":"One vs Many","전투":"Combat","숫자추리":"Number Deduction","심리전":"Mind Games",
  "역할선택":"Role Selection","숫자":"Numbers","퍼즐":"Puzzle","가족":"Family","팀":"Teams","가벼운전략":"Light Strategy",
  "타일배치":"Tile Placement","창의력":"Creativity","협상":"Negotiation"
};

const UI={
  ko:{
    heroTitle:"오늘 뭐 하지? 🎲",
    subtitle:"인원수와 분위기를 골라서 오늘 할 게임을 찾아보세요.",
    players:"몇 명인가요?", clear:"전체 초기화", time:"얼마나 할까요?", mood:"오늘 분위기는?",
    time20:"⚡ 20분 내외", time60:"☕ 1시간 이내", timeLong:"🎲 1시간+",
    search:"게임 이름 검색…", sortLabel:"정렬",
    sorts:{default:"추천순",easy:"쉬운 게임부터",hard:"어려운 게임부터",short:"짧은 게임부터",long:"긴 게임부터"},
    result:"개의 게임", emptyTitle:"조건에 맞는 게임이 없어요.", emptyText:"필터를 조금 줄여보세요.",
    footer:"다음 보드게임 모임에서 하고 싶은 게임을 골라보세요 ✨", difficulty:"난이도", peopleSuffix:"명"
  },
  en:{
    heroTitle:"What should we play? 🎲",
    subtitle:"Pick the player count and vibe to find a game for today.",
    players:"How many players?", clear:"Clear all", time:"How long?", mood:"What's the vibe?",
    time20:"⚡ Around 20 min", time60:"☕ Up to 1 hour", timeLong:"🎲 Over 1 hour",
    search:"Search games…", sortLabel:"Sort",
    sorts:{default:"Recommended",easy:"Easiest first",hard:"Hardest first",short:"Shortest first",long:"Longest first"},
    result:" games", emptyTitle:"No games match these filters.", emptyText:"Try removing one or two filters.",
    footer:"Pick something you'd like to play at the next board game meetup ✨", difficulty:"Difficulty", peopleSuffix:" players"
  }
};

function t(){return UI[currentLang]}

function playerText(players){
  const p=[...players];
  if(currentLang==="ko"){
    if(p.includes(8)) return `${p[0]}–8+명`;
    if(p.length===1) return `${p[0]}명`;
    return `${p[0]}–${p[p.length-1]}명`;
  }
  if(p.includes(8)) return `${p[0]}–8+ players`;
  if(p.length===1) return `${p[0]} player`;
  return `${p[0]}–${p[p.length-1]} players`;
}

function stars(n){return "★".repeat(n)+"☆".repeat(4-n)}

function gameTitle(g){return currentLang==="ko"?g.name:g.en}
function gameSubtitle(g){return currentLang==="ko"?g.en:g.name}
function gameDesc(g){return currentLang==="ko"?g.desc:(g.descEn||g.desc)}
function gameTime(g){return currentLang==="ko"?g.time:(g.timeEn||`${g.minutes} min`)}
function tagName(tag){return currentLang==="ko"?tag:(TAG_NAMES_EN[tag]||tag)}

function coverHTML(g, cls="cover"){
  const filename = g.image || (encodeURIComponent(g.en.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""))+".jpg");
  return `<div class="${cls}">
    <img src="images/${filename}?v=${IMAGE_VERSION}" data-full="images/${filename}?v=${IMAGE_VERSION}" alt="${gameTitle(g)}" class="game-image" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <span class="placeholder" style="display:none">🎲</span>
    ${cls==="cover"?`<span class="mini">${stars(g.difficulty)}</span>`:""}
  </div>`;
}

function renderTagFilters(){
  tagContainer.innerHTML="";
  TAGS.forEach(tag=>{
    const b=document.createElement("button");
    b.textContent=TAG_LABELS[currentLang][tag]||tagName(tag);
    b.dataset.tag=tag;
    if(state.tag===tag)b.classList.add("active");
    tagContainer.appendChild(b);
  });
}

function renderSortOptions(){
  const select=document.querySelector("#sortSelect");
  const selected=state.sort;
  select.innerHTML=Object.entries(t().sorts).map(([value,label])=>`<option value="${value}">${label}</option>`).join("");
  select.value=selected;
  select.setAttribute("aria-label",t().sortLabel);
}

function updateUI(){
  document.documentElement.lang=currentLang;
  document.title=currentLang==="ko"?"오늘 뭐 하지? — KP's Board Game Shelf":"What should we play? — KP's Board Game Shelf";
  document.querySelector("#heroTitle").textContent=t().heroTitle;
  document.querySelector("#heroSubtitle").textContent=t().subtitle;
  document.querySelector("#playersHeading").textContent=t().players;
  document.querySelector("#clearFilters").textContent=t().clear;
  document.querySelector("#timeHeading").textContent=t().time;
  document.querySelector("#moodHeading").textContent=t().mood;
  document.querySelector("#time20").textContent=t().time20;
  document.querySelector("#time60").textContent=t().time60;
  document.querySelector("#timeLong").textContent=t().timeLong;
  document.querySelector("#searchInput").placeholder=t().search;
  document.querySelector("#searchInput").setAttribute("aria-label",t().search);
  document.querySelector("#resultSuffix").textContent=t().result;
  document.querySelector("#emptyTitle").textContent=t().emptyTitle;
  document.querySelector("#emptyText").textContent=t().emptyText;
  document.querySelector("#footerText").textContent=t().footer;
  document.querySelector(".modal-close").setAttribute("aria-label",currentLang==="ko"?"닫기":"Close");
  document.querySelectorAll(".language-switch button").forEach(b=>b.classList.toggle("active",b.dataset.lang===currentLang));
  renderTagFilters();
  renderSortOptions();
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
      const haystack=[g.name,g.en,g.desc,g.descEn,...g.tags,...g.tags.map(tag=>TAG_NAMES_EN[tag]||tag)].join(" ").toLowerCase();
      if(!haystack.includes(q)) return false;
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
        <h3>${gameTitle(g)}</h3><div class="en">${gameSubtitle(g)}</div>
        <div class="meta"><span>👥 ${playerText(g.players)}</span><span>⏱ ${gameTime(g)}</span></div>
        <p class="desc">${gameDesc(g)}</p>
        <div class="tags">${g.tags.slice(0,3).map(tag=>`<span class="tag">#${tagName(tag)}</span>`).join("")}</div>
      </div>`;
    card.onclick=()=>openModal(g);
    grid.appendChild(card);
  });
}

function openModal(g){
  modalContent.innerHTML=`${coverHTML(g,"modal-cover")}
    <div class="modal-body">
      <h2>${gameTitle(g)}</h2><div class="en">${gameSubtitle(g)}</div>
      <div class="meta"><span>👥 ${playerText(g.players)}</span><span>⏱ ${gameTime(g)}</span><span>${t().difficulty} ${stars(g.difficulty)}</span></div>
      <p class="desc">${gameDesc(g)}</p>
      <div class="tags">${g.tags.map(tag=>`<span class="tag">#${tagName(tag)}</span>`).join("")}</div>
    </div>`;
  modal.showModal();
}

function openImageModal(src, alt){
  fullImage.src=src;
  fullImage.alt=alt || "";
  imageModal.showModal();
}

document.addEventListener("click",e=>{
  const img=e.target.closest(".game-image");
  if(!img)return;
  e.stopPropagation();
  openImageModal(img.dataset.full,img.alt);
});

document.querySelector(".image-modal-close").onclick=()=>imageModal.close();
imageModal.addEventListener("click",e=>{if(e.target===imageModal)imageModal.close()});

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
  renderSortOptions();
  render();
};

document.querySelector(".language-switch").addEventListener("click",e=>{
  const b=e.target.closest("button[data-lang]"); if(!b)return;
  currentLang=b.dataset.lang;
  localStorage.setItem("boardgameLang",currentLang);
  updateUI();
  render();
  if(modal.open) modal.close();
});

updateUI();
render();
