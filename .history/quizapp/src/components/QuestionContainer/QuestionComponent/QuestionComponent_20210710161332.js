import React, {useState, useCallback} from 'react';
import './QuestionComponent.css';


function QuestionComponent(props) {
    // Sets active class of button using a string in className.
    const [ activeClass, setActiveClass ] = useState('')
    // Made to reset wrong button className.
    const [ wrongAnswerClass, setWrongAnswerClass] = useState('');
    // Spread in the incorrect answers with the correct answer on init.
    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);
    
    const onClick = useCallback((answer) => {
        if(answer === props.answer){
            // Set state of active class to correct, then set it on the className in html.
            setActiveClass('correct')
            // Needed to set the incorrect buttons to red, and reset styling on new questions.
            setWrongAnswerClass('wrong')
            // Pass true up to parent component and set isCorrect to true.
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
                {answers.map(answer => { return <button key={answer} onClick={() => onClick(answer)} className={`answer-button ${answer === props.answer ? activeClass : wrongAnswerClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;