import React from 'react';
import './QuestionComponent.css';



function QuestionComponent(props) {



    return (
        <div>
            <div className="question-text">{props.question.question}</div>
        </div>
    )
    
}

export default QuestionComponent;