import React from 'react';
import { useLocation } from "react-router-dom";

function GameOverScreen() {
    const location = useLocation();

    return(
        <div>Game Over</div>
    )
}

export default GameOverScreen;