import React from "react";
import { useState } from "react";
import { shuffle } from "./Container";

// export default function Card(props) {
export default function Card({ color, onClick }) {
  const [counter, setCounter] = useState(0);
  const buttonStyle = {
    backgroundColor: color,
  };

  return (
    <>
      <button
        // onClick={() => setCounter((prev) => prev + 1)}
        onClick={onClick}
        style={buttonStyle}
        className="card">
        {counter}
      </button>

      {counter > 1 && alert("game over bitch")}
    </>
  );
}

export const ChildMemo = React.memo(Card);
