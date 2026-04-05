export default function Modal({ close }) {
  return (
    <div className="overlay">
      <div className="modal">
        <h1>How to Play...</h1>
        <p>
          Click your way through{" "}
          <span className="simpsonsHighlight">The Simpsons</span> characters,
          but do not click the same one twice or you will loose!
        </p>
        <button onClick={close} className="closeBtn">
          Close
        </button>
      </div>
    </div>
  );
}
