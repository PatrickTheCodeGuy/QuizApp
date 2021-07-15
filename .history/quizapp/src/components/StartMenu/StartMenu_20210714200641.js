import React from 'react';
import './StartMenu.css';

// Lib Imports.
import { Link } from 'react-router-dom';


function StartMenu() {
    
        return (
            <div className="menu-container">
                <h1 className="menu-text">Quizania</h1>
                <p className="regular-text">A quiz game, try and get the highest score!</p>
                <Link to='/newGame' className="button-start">Start</Link>
            </div>
        )
}

export default StartMenu;