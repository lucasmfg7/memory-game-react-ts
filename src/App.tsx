import { useState, useEffect } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard";
import { cardImages } from "./data/cads";

export interface Card {
  src: string;
  id: number;
}

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);

  useEffect(() => {
    handleCompareChoices();
  }, [choiceOne, choiceTwo]);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  }

  function handleChoice(card: Card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  function handleCompareChoices() {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        console.log("Match");
        resetTurn();
      } else {
        console.log("Dont Match");
        resetTurn();
      }
    }
  }

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>Novo Jogo</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id}>
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
