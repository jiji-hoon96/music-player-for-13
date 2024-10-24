import { CardList } from "@/components/player/CardList";
import { songList } from "@/data/songList";

function Home() {
  const TITLE = "13조 KT 엠티뮤직 뽕짜라뽕 👏";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{TITLE}</h1>
      <CardList cards={songList} />
    </div>
  );
}

export default Home;
