import React, { useState } from "react";
import "./GameInfo.css";
import { Link } from "react-router-dom";
import { ImArrowLeft, ImInfo } from "react-icons/im";
import Modal from "react-modal";

function GameInfo() {
  // Fix for screen readers getting an error on modal mount
  Modal.setAppElement("#root");

  const overlayStyle = {
    content: {
      fontFamily: 'Press Start 2P", cursive',
      border: "6px groove black",
      textAlign: "center",
      backgroundColor: "white",
      boxShadow: "0px 12px 25px -8px #000000",
      width: "22em",
      height: "40em",
      margin: "10% auto 0",
    },
    overlay: {
      backgroundColor: "rgb(6 214 247 / 58%)",
    },
  };

  // Modal hook
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  return (
    <div className="gameInfo-container">
      <div className="gameInfo-header">
        <Link className="back-button" to="/">
          <ImArrowLeft size={64} className="back-arrow" />
        </Link>
        <button onClick={openModal}>Settings</button>
        <Modal
          contentLabel="Settings"
          onRequestClose={() => setModalIsOpen(false)}
          isOpen={modalIsOpen}
          style={overlayStyle}
        >
          <div className="settings-container">
            <div className="settings-title">
              <h1>Settings</h1>
            </div>
            <div className="score-multiplier-display">
              <p>Current Score Multiplier: 1.0x</p>
            </div>
            <div className="settings-options">
              <p>Timer setting</p>
              <p>Category select</p>
              <div>Question Difficulty</div>
            </div>
          </div>
        </Modal>
      </div>
      <div className="gameInfo-body">
        <h5 className="rules-text">Rules</h5>
      </div>
      <div>
        <p className="regular-text info">Welcome to Quizania!</p>
        <p className="regular-text info">
          The rules are simple: Answer the question in the alloted time.
        </p>
        <p className="regular-text info">
          If you select the correct answer you get points! Try to get as many as
          you can until you cant anymore.
        </p>
        <p className="regular-text warning">
          IMPORTANT: DO NOT LEAVE THE TAB OR YOU WILL AUTOMATICALLY FAIL!
        </p>
        <Link to="/questions" className="button-start">
          Go
        </Link>
      </div>
    </div>
  );
}

export default GameInfo;
