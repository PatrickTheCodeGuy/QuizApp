import React, {useState} from 'react';
import './QuestionComponent.css';



checkAnswer = (answer) => {
    console.log("answer: ", answer)
    if(answer === props.answer){
        console.log("true!")
    }
}

function QuestionComponent(props) {

    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);

    


    return (
        <div class="question-card">
            <div className="question-text">{props.question.question}</div>
            <div className="answers-button-container">
                {answers.map(answer => { return <button onClick={() => checkAnswer(answer)} class="answer-button">{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;