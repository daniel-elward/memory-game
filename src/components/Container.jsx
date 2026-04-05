import { useState, useEffect, Suspense } from "react";
import Card from "./Card";
import EndGame from "./GameEnd";

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
  const [score, setScore] = useState(0);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "https://thesimpsonsapi.com/api/characters";
  const baseUrl = "https://cdn.thesimpsonsapi.com/200";
  const imageCount = 15; //set thumbnail count

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const prunedData = data.results.slice(0, imageCount); //limit the results from the api
        setImages(prunedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading ...</p>;
  }

  const handleClick = () => {
    setScore((prev) => prev + 1);
  };

  shuffle(images);

  return (
    <>
      <div className="counter">
        <p>current score: {score}</p>
      </div>

      <div className="cardContainer">
        {images.map((item) => {
          return (
            <Card
              key={item.id}
              imageUrl={baseUrl + item.portrait_path}
              onClick={handleClick}
              score={score}
            />
          );
        })}
      </div>

      {score === imageCount && (
        <EndGame
          score={score}
          heading="You win, Woo-Hoo!"
          message="You should speak with Professor John Frink, I'm sure he could use someone with your brain power!"
        />
      )}
    </>
  );
}
