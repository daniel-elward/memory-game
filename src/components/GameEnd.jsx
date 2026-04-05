export default function EndGame({ score, heading, message }) {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <h1>{heading}</h1>
          <h2>{message}</h2>
          <p>You scored: {score} </p>
          <button
            onClick={() => {
              window.location.reload();
            }}>
            Play Again?
          </button>
        </div>
      </div>
    </>
  );
}
