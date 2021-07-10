import React from 'react';
import './StartMenu.css';

// Lib Imports.
import { Link } from 'react-router-dom';


class StartMenu extends React.Component {
    constructor(props){
        super(props);
        // TODO
        // determine if need logic here, may just need to be a functional component.
    }

    render(){
        return (
            <div className="menu-container">
                <h1 className="menu-text">Quizania</h1>
                <p className="regular-text">A quiz game, try and get the highest score!</p>
                <Link to='/newGame' className="button-start">Start</Link>
            </div>
        )
    }
}

export default StartMenu;