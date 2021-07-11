import React, {useState, useCallback, useEffect} from 'react';
import './QuestionComponent.css';
import { replaceSpecialCharacters, shuffleArray, } from './specialCharacters';



function QuestionComponent(props) {
    // Sets active class of button using a string in className.
    let [ activeClass, setActiveClass ] = useState('')
    // Made to reset wrong button className.
    let [ wrongAnswerClass, setWrongAnswerClass] = useState('');
    let [ rightAnswer, setRightAnswer ] = useState(props.answer)
    let [ isDisabled, setIsDisabled ] = useState(false);

    // Spread in the incorrect answers with the correct answer on init.
    let [ answers, setAnswers ] = useState(shuffleArray(replaceSpecialCharacters([...props.incorrect, props.answer])));
    // Flip boolean to help re-render component.
    let booleanCheck = false;

    // When props update, reset button styling.
    useEffect(() => {
        // Reset styling
        setActiveClass('')
        setWrongAnswerClass('')
        setIsDisabled(false)
        setRightAnswer(props.answer)

        // Replace special characters with their actual string variant.
        setAnswers(shuffleArray(replaceSpecialCharacters([...props.incorrect, props.answer])));
    }, [props])
    
    const onClick = useCallback((answer) => {
        // Disable all buttons to prevent re-answering.
        setIsDisabled(true)
        // Set state of active class to correct, then set it on the className in html.
        setActiveClass('correct')
        // Needed to set the incorrect buttons to red, and reset styling on new questions.
        setWrongAnswerClass('wrong')
        
        //TODO: Add logic to up score if correct answer
        console.log("answer selected:", answer)
        console.log("stored answer: ", rightAnswer)
        if(answer === rightAnswer){
            let newScore = props.score + 100
            props.setScore(newScore);
        }

        setTimeout(() => {
            // Keep component level flip to re render component and add 1 to currentIndex BAD SOLUTION.
            booleanCheck = !booleanCheck;
            props.setAnsweredCorrectly(booleanCheck);
        }, 5000)
        
    }, [] )
    


    return (
        <div className="question-card">
            <h3 className="question-text">{replaceSpecialCharacters(props.question.question)}</h3>
            <div className="answers-button-container">
                {answers.map(answer => { return <button disabled={isDisabled} key={answer} onClick={() => onClick(answer)} className={`answer-button ${answer === rightAnswer ? activeClass : wrongAnswerClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;