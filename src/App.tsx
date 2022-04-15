import { useState } from "react";
import "./App.css";
import { cardImages, Cards } from "./data/cads";

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
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="front card" />
              <img className="back" src="../img/cover.png" alt="back card" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
