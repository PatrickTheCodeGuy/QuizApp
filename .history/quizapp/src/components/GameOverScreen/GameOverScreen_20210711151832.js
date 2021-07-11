import React from 'react';
import { useLocation } from "react-router-dom";

function GameOverScreen(props) {
    const location = useLocation();

    return(
        <div>Score: {props.score}</div>
    )
}

export default GameOverScreen;