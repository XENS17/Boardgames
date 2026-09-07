const GAMES = [
  {
    "name": "달무티",
    "en": "The Great Dalmuti",
    "image": "dalmuti.jpg",
    "players": [
      4,
      5,
      6,
      7,
      8
    ],
    "time": "30–60분",
    "timeEn": "30–60 min",
    "minutes": 45,
    "difficulty": 1,
    "tags": [
      "파티",
      "카드",
      "가볍게"
    ],
    "desc": "계급이 계속 뒤바뀌는 빠르고 유쾌한 카드게임.",
    "descEn": "A fast and lively card game where the social hierarchy keeps changing."
  },
  {
    "name": "라스베가스",
    "en": "Las Vegas",
    "image": "las-vegas.jpg",
    "players": [
      2,
      3,
      4,
      5
    ],
    "time": "30–45분",
    "timeEn": "30–45 min",
    "minutes": 40,
    "difficulty": 1,
    "tags": [
      "주사위",
      "파티",
      "가볍게"
    ],
    "desc": "주사위를 굴려 카지노를 차지하는 간단한 눈치 싸움.",
    "descEn": "Roll dice, compete for casinos, and outmaneuver the other players in a simple battle of timing."
  },
  {
    "name": "사보타지",
    "en": "Saboteur",
    "image": "saboteur.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "30분",
    "timeEn": "30 min",
    "minutes": 30,
    "difficulty": 1,
    "tags": [
      "정체숨기기",
      "블러핑",
      "파티"
    ],
    "desc": "금을 찾는 광부와 길을 망치는 방해꾼의 정체 숨기기 게임.",
    "descEn": "Miners race for the gold while hidden saboteurs secretly try to block the tunnels."
  },
  {
    "name": "잉카의 황금",
    "en": "Incan Gold",
    "image": "incan-gold.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "20–30분",
    "timeEn": "20–30 min",
    "minutes": 25,
    "difficulty": 1,
    "tags": [
      "푸시유어럭",
      "파티",
      "가볍게"
    ],
    "desc": "더 들어갈지 돌아갈지 매 순간 욕심을 시험하는 탐험 게임.",
    "descEn": "Push your luck deeper into the ruins—or turn back before the hazards take everything."
  },
  {
    "name": "스플렌더",
    "en": "Splendor",
    "image": "splendor.jpg",
    "players": [
      2,
      3,
      4
    ],
    "time": "30–45분",
    "timeEn": "30–45 min",
    "minutes": 40,
    "difficulty": 2,
    "tags": [
      "전략",
      "엔진빌딩"
    ],
    "desc": "보석을 모아 더 강한 구매 엔진을 만드는 입문 전략게임.",
    "descEn": "Collect gems and build an increasingly powerful engine for buying valuable cards."
  },
  {
    "name": "서바이브: 더 아일랜드",
    "en": "Survive: The Island",
    "image": "survive-the-island.jpg",
    "players": [
      2,
      3,
      4,
      5
    ],
    "time": "45–60분",
    "timeEn": "45–60 min",
    "minutes": 55,
    "difficulty": 2,
    "tags": [
      "전략",
      "경쟁",
      "테마"
    ],
    "desc": "가라앉는 섬에서 탈출하며 서로의 생존자를 견제하는 게임.",
    "descEn": "Escape a sinking island while protecting your survivors and disrupting everyone else's."
  },
  {
    "name": "타코 캣 고트 치즈 피자",
    "en": "Taco Cat Goat Cheese Pizza",
    "image": "taco-cat-goat-cheese-pizza.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "10–15분",
    "timeEn": "10–15 min",
    "minutes": 15,
    "difficulty": 1,
    "tags": [
      "순발력",
      "파티",
      "가볍게"
    ],
    "desc": "말과 카드가 맞는 순간 누구보다 빨리 손을 내미는 순발력 게임.",
    "descEn": "Say the words, watch the cards, and slap the pile faster than everyone else when they match."
  },
  {
    "name": "익스플로딩 키튼 - 굿앤이블",
    "en": "Exploding Kittens: Good vs Evil",
    "image": "exploding-kitten.png",
    "players": [
      2,
      3,
      4,
      5
    ],
    "time": "15–20분",
    "timeEn": "15–20 min",
    "minutes": 20,
    "difficulty": 1,
    "tags": [
      "파티",
      "카드",
      "가볍게"
    ],
    "desc": "폭발 고양이를 피하며 서로를 방해하는 가벼운 카드게임.",
    "descEn": "A light card game about dodging exploding kittens while sabotaging your friends."
  },
  {
    "name": "아발론 레지스탕스",
    "en": "The Resistance: Avalon",
    "image": "avalon.jpg",
    "players": [
      5,
      6,
      7,
      8
    ],
    "time": "30–45분",
    "timeEn": "30–45 min",
    "minutes": 40,
    "difficulty": 2,
    "tags": [
      "정체숨기기",
      "토론",
      "블러핑"
    ],
    "desc": "선과 악의 정체를 숨긴 채 임무의 성공과 실패를 두고 벌이는 심리전.",
    "descEn": "Good and evil hide among the group as players debate who can be trusted with each mission."
  },
  {
    "name": "화이트홀 미스테리",
    "en": "Whitehall Mystery",
    "image": "whitehall.jpg",
    "players": [
      2,
      3,
      4
    ],
    "time": "45–75분",
    "timeEn": "45–75 min",
    "minutes": 60,
    "difficulty": 3,
    "tags": [
      "추리",
      "1대다수",
      "전략"
    ],
    "desc": "한 명의 도망자와 수사팀이 런던 지도를 두고 벌이는 숨막히는 추격전.",
    "descEn": "One player flees across London while the investigators work together to track them down."
  },
  {
    "name": "뱅!",
    "en": "BANG!",
    "image": "bang.jpg",
    "players": [
      4,
      5,
      6,
      7
    ],
    "time": "30–60분",
    "timeEn": "30–60 min",
    "minutes": 50,
    "difficulty": 2,
    "tags": [
      "정체숨기기",
      "전투",
      "파티"
    ],
    "desc": "보안관, 무법자, 배신자의 역할이 얽히는 서부극 카드게임.",
    "descEn": "The Sheriff, Outlaws, and Renegade face off in a chaotic Wild West card game with hidden roles."
  },
  {
    "name": "한밤의 늑대인간",
    "en": "One Night Ultimate Werewolf",
    "image": "one-night-werewolves.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "10–15분",
    "timeEn": "10–15 min",
    "minutes": 15,
    "difficulty": 1,
    "tags": [
      "정체숨기기",
      "토론",
      "파티"
    ],
    "desc": "단 한 번의 밤 이후 서로의 정체를 추리하는 초고속 사회적 추론 게임.",
    "descEn": "A lightning-fast social deduction game where everyone tries to uncover the roles after a single night."
  },
  {
    "name": "코요테",
    "en": "Coyote",
    "image": "coyote.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "20–30분",
    "timeEn": "20–30 min",
    "minutes": 25,
    "difficulty": 1,
    "tags": [
      "블러핑",
      "숫자추리",
      "파티"
    ],
    "desc": "내 숫자만 모르는 상태에서 전체 합을 추정하는 유쾌한 블러핑 게임.",
    "descEn": "Everyone can see your number except you—bluff and estimate the total before someone calls you out."
  },
  {
    "name": "노땡스",
    "en": "No Thanks!",
    "image": "no-thanks.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7
    ],
    "time": "20분",
    "timeEn": "20 min",
    "minutes": 20,
    "difficulty": 1,
    "tags": [
      "카드",
      "심리전",
      "가볍게"
    ],
    "desc": "카드를 받을지 칩을 내고 넘길지 고민하는 간결한 심리전.",
    "descEn": "A beautifully simple dilemma: take the card, or spend a chip to pass the problem to someone else."
  },
  {
    "name": "타임라인 트위스트",
    "en": "Timeline Twist",
    "image": "timeline-twist.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6
    ],
    "time": "15–30분",
    "timeEn": "15–30 min",
    "minutes": 25,
    "difficulty": 1,
    "tags": [
      "협력",
      "추리",
      "가볍게"
    ],
    "desc": "사건 카드를 시간 순서대로 배치하는 협력형 타임라인 게임.",
    "descEn": "Work together to place event cards in the correct chronological order."
  },
  {
    "name": "마헤",
    "en": "Mahe",
    "image": "mahe.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "time": "20–30분",
    "timeEn": "20–30 min",
    "minutes": 25,
    "difficulty": 1,
    "tags": [
      "주사위",
      "푸시유어럭",
      "파티"
    ],
    "desc": "거북이를 업고 업히며 알을 차지하는 주사위 레이싱 게임.",
    "descEn": "Race turtles around the island, stack on other players, and push your luck for the best eggs."
  },
  {
    "name": "루미큐브",
    "en": "Rummikub",
    "image": "rumicube.jpg",
    "players": [
      2,
      3,
      4
    ],
    "time": "30–60분",
    "timeEn": "30–60 min",
    "minutes": 45,
    "difficulty": 1,
    "tags": [
      "숫자",
      "퍼즐",
      "가족"
    ],
    "desc": "숫자 타일을 조합하고 재배치하며 손패를 먼저 비우는 클래식 게임.",
    "descEn": "Build and rearrange sets and runs of numbered tiles to empty your rack before everyone else."
  },
  {
    "name": "시타델",
    "en": "Citadels",
    "image": "citadel.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "45–90분",
    "timeEn": "45–90 min",
    "minutes": 70,
    "difficulty": 3,
    "tags": [
      "역할선택",
      "심리전",
      "전략"
    ],
    "desc": "매 라운드 비밀리에 역할을 골라 도시를 키우고 상대를 견제하는 전략게임.",
    "descEn": "Secretly choose a role each round, build your city, and use character powers to outplay your rivals."
  },
  {
    "name": "바퀴벌레 포커",
    "en": "Cockroach Poker",
    "image": "cockroach-poker.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6
    ],
    "time": "15–25분",
    "timeEn": "15–25 min",
    "minutes": 20,
    "difficulty": 1,
    "tags": [
      "블러핑",
      "파티",
      "가볍게"
    ],
    "desc": "카드의 정체를 말로 속이고 의심하는 순수 블러핑 게임.",
    "descEn": "A pure bluffing game where every card claim might be the truth—or a complete lie."
  },
  {
    "name": "할리갈리 (후르츠 펀치)",
    "en": "Halli Galli",
    "image": "fruits-punch.png",
    "players": [
      2,
      3,
      4,
      5,
      6
    ],
    "time": "10–15분",
    "timeEn": "10–15 min",
    "minutes": 15,
    "difficulty": 1,
    "tags": [
      "순발력",
      "파티",
      "가볍게"
    ],
    "desc": "과일이 다섯 개가 되는 순간 종을 먼저 치는 순발력 게임.",
    "descEn": "Watch the fruit cards and be the first to ring the bell whenever exactly five of a fruit appear."
  },
  {
    "name": "스페이스 크루",
    "en": "The Crew: The Quest for Planet Nine",
    "image": "space-crew.jpg",
    "players": [
      3,
      4,
      5
    ],
    "time": "20분/미션",
    "timeEn": "20 min / mission",
    "minutes": 25,
    "difficulty": 3,
    "tags": [
      "협력",
      "트릭테이킹",
      "전략"
    ],
    "desc": "제한된 의사소통으로 미션 조건을 맞춰야 하는 협력 트릭테이킹.",
    "descEn": "A cooperative trick-taking game where limited communication makes every mission a puzzle."
  },
  {
    "name": "스컬킹",
    "en": "Skull King",
    "image": "skull-king.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "30–45분",
    "timeEn": "30–45 min",
    "minutes": 40,
    "difficulty": 2,
    "tags": [
      "트릭테이킹",
      "카드",
      "경쟁"
    ],
    "desc": "자신이 몇 번 이길지 정확히 예측해야 하는 해적 테마 트릭테이킹.",
    "descEn": "A pirate-themed trick-taking game where you must predict exactly how many tricks you will win."
  },
  {
    "name": "딕싯",
    "en": "Dixit",
    "image": "dixit.jpg",
    "players": [
      3,
      4,
      5,
      6,
      7,
      8
    ],
    "time": "30분",
    "timeEn": "30 min",
    "minutes": 30,
    "difficulty": 1,
    "tags": [
      "창의력",
      "파티",
      "스토리"
    ],
    "desc": "그림 카드에 애매한 힌트를 붙여 서로의 상상력을 읽는 게임.",
    "descEn": "Give imaginative clues to surreal picture cards and try to read how the other players think."
  },
  {
    "name": "노팅엄의 지방관",
    "en": "Sheriff of Nottingham",
    "image": "sheriff-of-nottingham.jpg",
    "players": [
      3,
      4,
      5
    ],
    "time": "45–60분",
    "timeEn": "45–60 min",
    "minutes": 55,
    "difficulty": 2,
    "tags": [
      "협상",
      "블러핑",
      "파티"
    ],
    "desc": "합법 물품과 밀수품 사이에서 거짓말, 협상, 검문이 벌어지는 게임.",
    "descEn": "Declare your goods, bluff about contraband, negotiate deals, and decide who gets inspected."
  },
  {
    "name": "옛날옛적에",
    "en": "Once Upon a Time",
    "image": "once-upon-a-time.jpg",
    "players": [
      2,
      3,
      4,
      5,
      6
    ],
    "time": "20–40분",
    "timeEn": "20–40 min",
    "minutes": 30,
    "difficulty": 1,
    "tags": [
      "스토리",
      "파티",
      "창의력"
    ],
    "desc": "각자의 카드 요소를 이야기 속에 끼워 넣으며 결말을 향해 가는 스토리텔링 게임.",
    "descEn": "Build a fairy tale together while steering the story toward the ending on your own card."
  },
  {
    "name": "시퀀스",
    "en": "Sequence",
    "image": "sequence.jpg",
    "players": [
      2,
      3,
      4,
      6,
      8
    ],
    "time": "30–45분",
    "timeEn": "30–45 min",
    "minutes": 40,
    "difficulty": 1,
    "tags": [
      "팀",
      "가벼운전략",
      "가족"
    ],
    "desc": "카드를 내고 보드에 칩을 놓아 다섯 개의 연속을 만드는 팀 전략게임.",
    "descEn": "Play cards to place chips on the board and race to connect five in a row."
  },
  {
    "name": "카르카손",
    "en": "Carcassonne",
    "image": "carcassone.jpg",
    "players": [
      2,
      3,
      4,
      5
    ],
    "time": "35–45분",
    "timeEn": "35–45 min",
    "minutes": 40,
    "difficulty": 2,
    "tags": [
      "타일배치",
      "전략",
      "가족"
    ],
    "desc": "타일로 지도를 만들며 도시, 길, 수도원에 영향력을 놓는 클래식 전략게임.",
    "descEn": "Build a shared medieval landscape tile by tile and claim cities, roads, and monasteries for points."
  },
  {
    "name": "클루",
    "en": "Clue / Cluedo",
    "image": "clue.png",
    "players": [
      3,
      4,
      5,
      6
    ],
    "time": "45–60분",
    "timeEn": "45–60 min",
    "minutes": 50,
    "difficulty": 2,
    "tags": [
      "추리",
      "가족",
      "경쟁"
    ],
    "desc": "용의자, 장소, 흉기를 하나씩 지워가며 사건의 정답을 추리하는 게임.",
    "descEn": "Eliminate suspects, rooms, and weapons until you can solve the classic murder mystery."
  }
];
