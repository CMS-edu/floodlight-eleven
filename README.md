# Floodlight Eleven

야간 경기장에서 즐기는 11대11 3D 축구 게임. 휴대폰 가로 모드에 맞춰 만들었습니다.

- 조작: 왼쪽 조이스틱으로 이동, 오른쪽 버튼으로 패스·스루·슛(길게 눌러 파워)·질주. 수비 때는 교체·압박·태클.
- 키보드: WASD/방향키 이동, J 패스, K 스루, L/Space 슛, Shift 질주, C 카메라, P 일시정지.

## 구조

- `public/index.html` — 게임 전체 (three.js r128을 cdnjs에서 불러옴)
- `server.js` — Express로 `public/`을 서빙. 1대1 모드용 WebSocket을 같은 서버에 붙일 예정
- `render.yaml` — Render 배포 설정 (Blueprint)

## 로컬 실행

```
npm install
npm start   # http://localhost:3000
```

## 배포 (Render)

Render 대시보드에서 New → Blueprint → 이 저장소를 고르면 `render.yaml`대로 웹 서비스가 만들어집니다. 이후 `main`에 푸시할 때마다 자동 배포됩니다.
