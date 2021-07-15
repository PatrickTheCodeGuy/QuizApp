import React from "react";
import "./GameOver.css";
import { useLocation } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { useHistory } from "react-router";

function GameOverScreen(props) {
  const location = useLocation();
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <div className="game-over-screen">
      <div className="icon-container" onClick={onClick}>
        <ImHome size={"3.5em"} />
      </div>
      <h1 className="game-over-text">Game Over!</h1>

      <h4>Your Score: {location.state.score}</h4>
      <div className="save-game-container">
        <h5>Would you like to save your score to the leaderboards?</h5>
        <button className="save-score-button">Save Score</button>
      </div>
    </div>
  );
}

export default GameOverScreen;
