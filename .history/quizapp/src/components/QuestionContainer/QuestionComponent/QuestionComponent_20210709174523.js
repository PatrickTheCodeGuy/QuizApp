import React from 'react';



function QuestionComponent(props) {



    return (
        <div>
            <div className="question-text">{props.question.question}</div>
        </div>
    )
    
}

export default QuestionComponent;