# 음악 플레이어

이 프로젝트는 `13 조의 엠티용 플레이 리스트` 입니다.
유일한 공통점인 KT 멤버들로 구성되어 있습니다.
공통점 찾다가 지쳐서 필 좀 받으려고 앞풀이 끝나고 바로 만들었습니다.

## 시작하기

먼저, 개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.



## 데이터 커스터마이징

### 노래 목록

이 프로젝트에서 사용되는 노래 데이터는 `data/songList.ts`에 위치해 있습니다. 이 파일은 데모 목적으로 목업 데이터를 포함하고 있습니다. 실제 데이터를 사용하려면 목업 데이터를 실제 노래 데이터로 교체하세요. 각 노래 객체에는 `title`과 오디오 파일의 URL을 가리키는 `audioSrc`가 포함되어야 합니다.

### 아바타 이미지

아바타 이미지는 `public/images` 디렉토리에 저장되어 있습니다. 이 이미지는 음악 플레이어에서 각 아티스트의 프로필 사진으로 사용됩니다. 기존 아바타 이미지를 본인의 이미지로 교체하세요. 로딩 시간과 성능을 최적화하기 위해 작은 크기의 이미지를 사용하는 것이 좋습니다.
