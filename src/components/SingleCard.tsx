interface CardProps {
  card: {
    src: string;
    id: number;
  };
}

export const SingleCard = ({ card }: CardProps) => {
  return (
    <div className="card">
      <img className="front" src={card.src} alt="front card" />
      <img className="back" src="../img/cover.png" alt="back card" />
    </div>
  );
};
