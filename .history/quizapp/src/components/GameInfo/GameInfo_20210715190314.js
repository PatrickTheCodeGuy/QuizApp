import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./GameInfo.css";
import "react-dropdown/style.css";
import { Link } from "react-router-dom";
import { ImArrowLeft, ImCross } from "react-icons/im";
import Modal from "react-modal";
import Dropdown from "react-dropdown";
import { useFirstRender } from "./customHook";
import { BiCog } from "react-icons/bi";

// Import static data
import {
  overlayStyle,
  timerOptions,
  questionDifficulty,
  questionType,
} from "./settings-data";

function GameInfo() {
  // Modal hook
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let [timeDifficulty, setTimeDifficulty] = useState(1.0);
  let [questionDifficultyState, setQuestionDifficulty] = useState(1.0);
  let [categoryId, setCategoryId] = useState(0);
  let [multiplier, setMultiplier] = useState(1.0);

  const firstRender = useFirstRender();

  useEffect(() => {
    if (firstRender) {
      let initialDifficulty =
        (parseFloat(timeDifficulty) * parseFloat(questionDifficultyState)) / 1;
      setMultiplier(initialDifficulty);
    }
  }, []);

  useEffect(() => {
    if (!firstRender) {
      console.log("timer: ", timeDifficulty);
      console.log("diff: ", questionDifficultyState);

      console.log("timer parse: ", parseFloat(timeDifficulty));
      console.log("diff parse: ", parseFloat(questionDifficultyState));

      console.log(
        "timer plus diff: ",
        parseFloat(timeDifficulty) + parseFloat(questionDifficultyState)
      );
      console.log(
        "diff parse plus timer: ",
        parseFloat(timeDifficulty) + parseFloat(questionDifficultyState)
      );

      console.log(
        "timer plus diff divison: ",
        (parseFloat(timeDifficulty) + parseFloat(questionDifficultyState)) / 2
      );

      // Grab average multiplier
      let tempMultiplier = (
        (parseFloat(timeDifficulty) + parseFloat(questionDifficultyState)) /
        2
      ).toFixed(2);
      setMultiplier(tempMultiplier);
    }
  }, [timeDifficulty, questionDifficultyState]);

  function onSelect(e) {
    if (e.value.type === "Time") {
      setTimeDifficulty(e.value.multiplier);
    }
    if (e.value.type === "Difficulty") {
      setQuestionDifficulty(e.value.multiplier);
    }
    if (Number.isInteger(e.value)) {
      setCategoryId(e.value);
    }
  }

  // Modal open close logic

  // Fix for screen readers getting an error on modal mount
  Modal.setAppElement("#root");

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <div className="gameInfo-container">
      <div className="gameInfo-header">
        <Link className="back-button" to="/">
          <ImArrowLeft className="back-arrow" size={64} />
        </Link>
        <button onClick={openModal}>
          <BiCog size={32} />
        </button>
        <Modal
          contentLabel="Settings"
          onRequestClose={() => setModalIsOpen(false)}
          isOpen={modalIsOpen}
          style={overlayStyle}
        >
          <div className="settings-container">
            <div className="exit-container">
              <ImCross className="exit-icon" onClick={closeModal} size={20} />
            </div>
            <div className="settings-title">
              <h1>Settings</h1>
            </div>
            <div className="score-multiplier-display">
              <p>Current Score Multiplier: {multiplier}x</p>
            </div>
            <div className="settings-options">
              <div>
                <p>Select Question Type</p>
                <Dropdown
                  arrowClassName="arrowBlack"
                  className="overrideDropdown"
                  options={questionType}
                  onChange={onSelect}
                  value={questionType[0]}
                  placeholder="Category Select"
                />
              </div>
              <div>
                <p>Select Question Difficulty</p>
                <Dropdown
                  arrowClassName="arrowBlack"
                  className="overrideDropdown"
                  options={questionDifficulty}
                  onChange={onSelect}
                  value={questionDifficulty[0]}
                  placeholder="Category Select"
                />
              </div>
              <div>
                <p>Select Timer Options</p>
                <Dropdown
                  arrowClassName="arrowBlack"
                  className="overrideDropdown"
                  options={timerOptions}
                  onChange={onSelect}
                  value={timerOptions[0]}
                  placeholder="Category Select"
                />
              </div>
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
