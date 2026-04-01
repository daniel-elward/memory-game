import { useState } from "react";
import CardMemo from "./Card";

//shuffle function used from stack overflow post
export function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export function Container() {
  const cards = ["red", "green", "orange", "yellow", "blue", "pink", "grey"];
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setScore((prev) => prev + 1);
  };

  shuffle(cards);

  return (
    <>
      <div className="counter">
        <p>current score: {score}</p>
      </div>

      <div className="cardContainer">
        {cards.map((cards) => {
          return <CardMemo key={cards} color={cards} onClick={handleClick} />;
        })}
      </div>
    </>
  );
}
