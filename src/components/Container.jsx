import Card from "./Card";

//shuffle function used from stack overflow post
function shuffle(array) {
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

export default function Container() {
  const cards = ["red", "green", "orange", "yellow", "blue", "pink", "grey"];

  shuffle(cards);

  return (
    <div className="cardContainer">
      {cards.map((cards) => {
        return <Card key={cards} color={cards} />;
      })}
    </div>
  );
}
