import React from 'react';
import { useLocation } from "react-router-dom";

function GameOverScreen(props) {
    const location = useLocation();

    return(
        <div>Score: {location.state.score}</div>
    )
}

export default GameOverScreen;