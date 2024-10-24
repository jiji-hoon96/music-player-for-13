import { CardList } from "@/components/player/CardList";

const cardsData = [
  {
    id: "1",
    profileImage: "/images/na1.svg",
    description: "첫 번째 아티스트의 앨범",
    songs: [
      {
        title: "노래 1",
        audioSrc:
          "https://joyo-musics.s3.ap-northeast-2.amazonaws.com/random-acoustic-electronic-guitar-136427.mp3",
      },
      {
        title: "노래 2",
        audioSrc:
          "https://joyo-musics.s3.ap-northeast-2.amazonaws.com/background-ambient-music-in-lydian-mode-21059.mp3",
      },
      {
        title: "노래 3",
        audioSrc:
          "https://joyo-musics.s3.ap-northeast-2.amazonaws.com/morax-unlocked-hacker-mode-142916.mp3",
      },
    ],
  },
  {
    id: "2",
    profileImage: "/images/na2.svg",
    description: "두 번째 아티스트의 앨범",
    songs: [
      {
        title: "노래 A",
        audioSrc:
          "https://joyo-musics.s3.ap-northeast-2.amazonaws.com/morax-unlocked-hacker-mode-142916.mp3",
      },
      {
        title: "노래 B",
        audioSrc:
          "https://joyo-musics.s3.ap-northeast-2.amazonaws.com/background-ambient-music-in-lydian-mode-21059.mp3",
      },
    ],
  },
  // 더 많은 카드 데이터...
];

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">음악 플레이어</h1>
      <CardList cards={cardsData} />
    </div>
  );
}

export default Home;
