import { useState } from "react";
import EndGame from "./GameEnd";

export default function Card({ imageUrl, onClick, score }) {
  const [counter, setCounter] = useState(0);

  const clickHandler = () => {
    setCounter((prev) => prev + 1);
    onClick(onClick);
  };

  return (
    <>
      <button
        onClick={clickHandler}
        className="card"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}>
        {/* click display for dev purposes */}
        {/* {counter} */}
      </button>

      {counter > 1 && (
        <EndGame
          score={score}
          heading="D'oh! You lose, better luck next time"
          message="Even Abe has better memory than you!"
        />
      )}
    </>
  );
}
