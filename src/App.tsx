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

  console.log(cards, turns);

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>Novo Jogo</button>
    </div>
  );
};

export default App;
