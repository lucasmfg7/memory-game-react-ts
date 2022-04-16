import { Card } from "../App";
import "./SingleCard.css";

interface CardProps {
  card: {
    src: string;
    id: number;
    matched: boolean;
  };
  handleChoice: (card: Card) => void;
  flipped: boolean;
}

export const SingleCard = ({ card, handleChoice, flipped }: CardProps) => {
  function handleClick() {
    handleChoice(card);
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front card" />
        <img
          className="back"
          src="../img/cover.png"
          alt="back card"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
