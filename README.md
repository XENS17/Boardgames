# Board Game Shelf

카카오톡 보드게임 모임에서 공유하기 위한 정적 GitHub Pages 사이트입니다.

## GitHub Pages에 올리기

1. GitHub에서 새 repository를 만듭니다. 예: `boardgames`
2. 이 폴더 안의 파일을 전부 repository 최상위에 업로드합니다.
3. GitHub repository → **Settings → Pages**
4. **Build and deployment → Source: Deploy from a branch**
5. Branch를 `main`, folder를 `/ (root)`로 선택하고 Save
6. 잠시 후 `https://USERNAME.github.io/boardgames/` 형태의 주소가 생깁니다.

## 게임 사진 추가하기

`images` 폴더에 JPG 파일을 넣으면 자동으로 플레이스홀더 대신 표시됩니다.

파일명 규칙은 영문 게임명을 소문자 + 하이픈으로 바꾼 것입니다.

예:
- `splendor.jpg`
- `bang.jpg`
- `the-resistance-avalon.jpg`
- `survive-the-island.jpg`
- `whitehall-mystery.jpg`
- `the-crew-the-quest-for-planet-nine.jpg`

사진이 없으면 🎲 플레이스홀더가 자동으로 표시되므로 그대로 사용해도 됩니다.

## 게임 정보 수정

`games.js`에서 각 게임의:
- 인원수
- 플레이 시간
- 난이도
- 태그
- 한줄 설명

을 직접 수정할 수 있습니다.

난이도는 1~4입니다.
