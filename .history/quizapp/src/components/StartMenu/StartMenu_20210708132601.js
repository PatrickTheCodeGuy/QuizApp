import React from 'react';
import './StartMenu.css';

class StartMenu extends React.Component {
    constructor(props){
        super(props);
        // TODO
        // determine if need logic here, may just need to be a functional component.
    }

    render(){
        return (
            <div class="menu-container">
                <h1 class="menu-text">Quizania</h1>
                <p class="regular-text">A quiz game, try and get the highest score!</p>
                <button class="button-start">Start</button>
            </div>
        )
    }
}

export default StartMenu;