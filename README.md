# Floodlight Eleven

야간 경기장에서 즐기는 11대11 3D 축구 게임. 휴대폰 가로 모드에 맞춰 만들었습니다.

- 조작: 왼쪽 조이스틱으로 이동, 오른쪽 버튼으로 패스·스루·슛(길게 눌러 파워)·질주. 수비 때는 교체·압박·태클.
- 키보드: WASD/방향키 이동, J 패스, K 스루, L/Space 슛, Shift 질주, C 카메라, P 일시정지.

## 1대1 온라인

메인 메뉴의 **1대1 온라인**에서 빠른 매칭 또는 4자리 방 코드로 상대와 11대11 경기를 합니다. 각자 자기 팀의 선택된 선수를 조종하고 나머지는 AI가 움직입니다.

- 방을 만든 쪽(호스트) 브라우저가 경기를 계산하고, 상대(게스트)는 조작을 보내고 호스트가 보낸 화면 상태를 그립니다. 서버는 둘을 짝지어 메시지를 중계만 합니다.
- 게스트 화면은 뒤집어서 보여 주므로 두 사람 모두 자기 팀이 오른쪽으로 공격합니다.
- 배포된 서버(Render)에서 열었을 때만 동작합니다. `file://`나 claude.ai 아티팩트에서는 1인 모드만 됩니다.

## 구조

- `public/index.html` — 게임 전체 (three.js r128을 cdnjs에서 불러옴)
- `server.js` — Express로 `public/`을 서빙하고 `/ws`에서 1대1 매칭·중계(WebSocket)
- `render.yaml` — Render 배포 설정 (Blueprint)

## 선수 모델과 동작

- `public/assets/player.glb` — three.js 예제의 X Bot(Mixamo) 모델을 약 1만 폴리곤으로 줄인 것. 유니폼·피부·머리색은 게임의 셰이더가 칠합니다.
- `public/assets/clips.json` — three.js 예제의 Soldier(걷기·달리기·대기)와 Michelle(삼바, 골 세리머니) 모션캡처 동작을 X Bot 골격에 맞게 변환한 것.
- 킥·다이빙·태클·슬라이딩·스로인 등 축구 동작은 코드에서 만든 자세를 같은 골격에 섞어 씁니다.
- 원본 모델과 동작은 Mixamo에서 나온 것으로 three.js 저장소(examples/models/gltf)에 포함된 파일입니다.

## 로컬 실행

```
npm install
npm start   # http://localhost:3000
```

## 배포 (Render)

Render 대시보드에서 New → Blueprint → 이 저장소를 고르면 `render.yaml`대로 웹 서비스가 만들어집니다. 이후 `main`에 푸시할 때마다 자동 배포됩니다.
