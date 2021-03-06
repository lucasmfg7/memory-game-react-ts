import { useState, useEffect } from "react";
import "./App.css";
import { SingleCard } from "./components/SingleCard";
import { cardImages } from "./data/cads";

export interface Card {
  src: string;
  id: number;
  matched: boolean;
}

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    handleCompareChoices();
  }, [choiceOne, choiceTwo]);

  function shuffleCards() {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  function handleChoice(card: Card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  function handleCompareChoices() {
    if (choiceOne && choiceTwo) {
      setDisable(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }

  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisable(false);
  }

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>Novo Jogo</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id}>
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disable={disable}
            />
          </div>
        ))}
      </div>
      <p>Turnos: {turns}</p>
    </div>
  );
};

export default App;
