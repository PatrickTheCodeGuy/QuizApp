import React, {useState} from 'react';
import './QuestionComponent.css';



function QuestionComponent(props) {

    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);


    return (
        <div class="question-card">
            <div className="question-text">{props.question.question}</div>
            <div className="answers-button-container">
                {answers.map(answer => { return <button class="answer-button">{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;