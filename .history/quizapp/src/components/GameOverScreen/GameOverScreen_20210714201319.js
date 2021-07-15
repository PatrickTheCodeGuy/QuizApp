import React from 'react';
import { useLocation } from "react-router-dom";

function GameOverScreen(props) {
    const location = useLocation();

    return(
        <div>Score: {this.props.location.score}</div>
    )
}

export default GameOverScreen;