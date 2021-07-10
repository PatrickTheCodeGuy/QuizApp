import React, {useState, useCallback} from 'react';
import './QuestionComponent.css';





function QuestionComponent(props) {

    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);
    const onClick = useCallback((answer) => {
        console.log("answer selected: ", answer)
        if(answer === props.answer){
            console.log("true!")
        }
    }, [props.answer] )
    


    return (
        <div class="question-card">
            <div className="question-text">{props.question.question}</div>
            <div className="answers-button-container">
                {answers.map(answer => { return <button onClick={() => onClick(answer)} class="answer-button">{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;