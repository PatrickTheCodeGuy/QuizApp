import React from 'react';
 

function GameInfo() {

    return(
        <div class="gameInfo-container">
                <h1 class="menu-text">Quizania</h1>
                <p class="regular-text">A quiz game, try and get the highest score!</p>
                <Link to='/newGame' class="button-start">Start</Link>
            </div>
    )
}

export default GameInfo;