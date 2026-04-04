import { useState } from "react";

export default function Card({ imageUrl, onClick }) {
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
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "200px",
          height: "200px",
        }}>
        {counter}
      </button>

      {counter > 1 && alert("game over bitch")}
    </>
  );
}
