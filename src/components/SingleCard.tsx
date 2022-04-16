import { Card } from "../App";

interface CardProps {
  card: {
    src: string;
    id: number;
  };
  handleChoice: (card: Card) => void;
}

export const SingleCard = ({ card, handleChoice }: CardProps) => {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card">
      <img className="front" src={card.src} alt="front card" />
      <img
        className="back"
        src="../img/cover.png"
        alt="back card"
        onClick={handleClick}
      />
    </div>
  );
};
