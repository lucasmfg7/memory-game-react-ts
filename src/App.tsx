import { useState } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard";
import { cardImages } from "./data/cads";

export interface Cards {
  src: string;
  id: number;
}

const App = () => {
  const [cards, setCards] = useState<Cards[]>([]);
  const [turns, setTurns] = useState<number>(0);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>Novo Jogo</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id}>
            <SingleCard key={card.id} card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
