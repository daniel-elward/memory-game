import { useState } from "react";

// function Button(props) {}

export default function Card(props) {
  const [counter, setCounter] = useState(0);
  const buttonStyle = {
    backgroundColor: props.color,
  };

  return (
    <>
      <button
        onClick={() => setCounter((prev) => prev + 1)}
        style={buttonStyle}>
        {counter}
      </button>

      {counter > 1 && alert("game over bitch")}
    </>
  );
}
