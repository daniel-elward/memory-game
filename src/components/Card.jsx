function Button(props) {
  const buttonStyle = {
    backgroundColor: props.color,
  };

  return <button style={buttonStyle}></button>;
}

export default function Card(props) {
  return (
    <>
      <Button color={props.color} />
    </>
  );
}
