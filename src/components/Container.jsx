import Card from "./Card";

export default function Container() {
  const cards = ["red", "green", "orange", "yellow", "blue", "pink", "black"];
  return (
    <div className="cardContainer">
      {cards.map((cards) => {
        return <Card key={cards} color={cards} />;
      })}
    </div>
  );
}
