import React, {useState, useCallback} from 'react';
import './QuestionComponent.css';





function QuestionComponent(props) {
    const [ activeClass, setActiveClass ] = useState('')
    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);
    const onClick = useCallback((answer) => {
        if(answer === props.answer){
            setActiveClass('correct')
            props.setAnsweredCorrectly(true);
        } else {
            // Logic to prevent any bugs where answered correctly stays true, just in case :)
            props.setAnsweredCorrectly(false);
        }
    }, [props.answer] )
    


    return (
        <div class="question-card">
            <div className="question-text">{props.question.question}</div>
            <div className="answers-button-container">
                {answers.map(answer => { return <button key={answer} onClick={() => onClick(answer)} className={`answer-button ${activeClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;