import React from "react";
import { useState, memo } from "react";

export default function Card({ color, onClick }) {
  const [counter, setCounter] = useState(0);
  const buttonStyle = {
    backgroundColor: color,
  };

  const clickHandler = () => {
    setCounter((prev) => prev + 1);
    onClick(onClick);
  };

  return (
    <>
      <button onClick={clickHandler} style={buttonStyle} className="card">
        {counter}
      </button>

      {counter > 1 && alert("game over bitch")}
    </>
  );
}
