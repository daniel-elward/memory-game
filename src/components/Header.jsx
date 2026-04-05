import { useState } from "react";
import Modal from "./Modal";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="helpBtn" onClick={() => setShowModal(true)}>
        ?
      </button>
      {showModal && <Modal close={closeModal} />}
      <div className="header">
        <h1>The simpsons</h1>
        <h2>Memory G ame</h2>
      </div>
    </>
  );
}
