import React from 'react';
import './Leaderboard.css';

class Leaderboard extends React.Component {
    constructor(props){
        super(props)
        // TODO
        //state for people and scores here
    }

    render(){
        return (
            <div>
                <h1 className="hi-score-text"> Hi Scores</h1>
                <hr className="rounded"/>
            </div>
        )
    }
}

export default Leaderboard;