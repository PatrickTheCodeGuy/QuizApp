import React from 'react';
import { useLocation } from "react-router-dom";

function GameOverScreen(props) {
    const location = useLocation();

    return(
        <div className="game-over-screen">
            <h1>Game Over!</h1>

            <h4>Your Score: {location.state.score}</h4>
        
            <h5>Would you like to save your score to the leaderboards?</h5>
            <button>Save Score</button>
        </div>
    )
}

export default GameOverScreen;