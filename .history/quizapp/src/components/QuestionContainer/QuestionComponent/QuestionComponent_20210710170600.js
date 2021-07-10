import React, {useState, useCallback, useEffect} from 'react';
import './QuestionComponent.css';


function QuestionComponent(props) {
    // Sets active class of button using a string in className.
    let [ activeClass, setActiveClass ] = useState('')
    // Made to reset wrong button className.
    let [ wrongAnswerClass, setWrongAnswerClass] = useState('');
    let [ rightAnswer, setRightAnswer ] = useState(props.answer)
    let [ isDisabled, setIsDisabled ] = useState(false);
    // Spread in the incorrect answers with the correct answer on init.
    let [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);

    useEffect(() => {
        // Reset styling
        setActiveClass('')
        setWrongAnswerClass('')
        setIsDisabled(false)
        setRightAnswer(props.answer)
        setAnswers([...props.incorrect, props.answer]);
    }, [props])
    
    const onClick = useCallback((answer) => {
        // Disable all buttons to prevent re-answering.
        setIsDisabled(true)
        // Set state of active class to correct, then set it on the className in html.
        setActiveClass('correct')
        // Needed to set the incorrect buttons to red, and reset styling on new questions.
        setWrongAnswerClass('wrong')
        setTimeout(() => {
            console.log("answer: ", answer)
            console.log("actual answer: ", props.answer)
            console.log("rightANswer var: ", rightAnswer)
            if(answer === rightAnswer){
                // Pass true up to parent component and set isCorrect to true.
                props.setAnsweredCorrectly(true);
            } else {
                // Logic to prevent any bugs where answered correctly stays true, just in case :)
                props.setAnsweredCorrectly(false);
            }
        }, 5000)
        
    }, [] )
    


    return (
        <div className="question-card">
            <div className="question-text">{props.question.question}</div>
            <div className="answers-button-container">
                {answers.map(answer => { return <button disabled={isDisabled} key={answer} onClick={() => onClick(answer)} className={`answer-button ${answer === props.answer ? activeClass : wrongAnswerClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;