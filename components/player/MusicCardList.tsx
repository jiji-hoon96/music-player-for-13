import { MusicCard } from "./MusicCard";

interface Song {
  title: string;
  audioSrc: string;
}

interface CardData {
  id: string;
  profileImage: string;
  description: string;
  songs: Song[];
}

interface CardListProps {
  cards: CardData[];
}

export function CardList({ cards }: CardListProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {cards.map((card) => (
        <MusicCard
          key={card.id}
          profileImage={card.profileImage}
          description={card.description}
          songs={card.songs}
        />
      ))}
    </div>
  );
}
