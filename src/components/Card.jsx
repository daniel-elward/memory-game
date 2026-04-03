import { useState } from "react";

export default function Card({ bgUrl, onClick }) {
  const [counter, setCounter] = useState(0);
  const buttonStyle = {
    backgroundImage: `url(${bgUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
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
