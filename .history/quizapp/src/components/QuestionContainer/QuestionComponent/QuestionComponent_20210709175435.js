import React from 'react';
import './QuestionComponent.css';



function QuestionComponent(props) {


    formatAnswer = (props) => {
        const combinedAnswerArray = [...props.incorrect, props.answer];
        return combinedAnswerArray
    }


    return (
        <div>
            <div className="question-text">{props.question.question}</div>
            <div>
                {formatAnswer(props).forEach(answer => {
                    return <button>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;