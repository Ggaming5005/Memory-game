import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h"];
    const shuffledCards = [...characters, ...characters].sort(
      () => 0.5 - Math.random()
    );
    setCards(shuffledCards);
  }, []);

  return (
    <>
      <div className="cards">
        {cards.map((el, i) => (
          <Card key={i} item={el} onClick={() => console.log(el)} />
        ))}
      </div>
    </>
  );
}

export default App;
