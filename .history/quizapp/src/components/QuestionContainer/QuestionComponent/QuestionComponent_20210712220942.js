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
    let [isCorrect, setIsCorrect] = useState(false);

    // Spread in the incorrect answers with the correct answer on init.
    let [ answers, setAnswers ] = useState(shuffleArray(replaceSpecialCharacters([...props.incorrect, props.answer])));
   

    // When props update, reset button styling.
    useEffect(() => {
        // Reset styling
        setActiveClass('')
        setIsCorrect(false);
        setWrongAnswerClass('')
        setIsDisabled(false)
        props.setAnswered(false);
        setRightAnswer(replaceSpecialCharacters(props.answer));

        // Replace special characters with their actual string variant.
        setAnswers(shuffleArray(replaceSpecialCharacters([...props.incorrect, props.answer])));
    }, [props])

    // Create async timeout to allow time for state to resolve on update.
    function timeout(answer, delay) {
        return new Promise( res => setTimeout(() => {
            if(answer === replaceSpecialCharacters(props.answer)){
                setIsCorrect(true);
                let newScore = props.score + 100
                props.setNextQuestion(newScore)
            } else {
                let newScore = props.score + 0
                props.setNextQuestion(newScore)
            }
        }, delay) );
    }
    
    const onClick = useCallback(async (answer) => {
        // Disable all buttons to prevent re-answering.
        setIsDisabled(true)
        // Set state of active class to correct, then set it on the className in html.
        setActiveClass('correct')
        // Needed to set the incorrect buttons to red, and reset styling on new questions.
        setWrongAnswerClass('wrong')
        let resolved = await timeout(answer, 5000);
    }, [props] )
    


    return (
        <div className="question-card">
            <h2 className={`alert ${isCorrect === true ? 'addOne' : 'incorrect'}`}>{isCorrect ? 'Correct!' : 'Incorrect!'}</h2>
            <h3 className="question-text">{replaceSpecialCharacters(props.question.question)}</h3>
            <div className="answers-button-container">
                {answers.map(answer => { return <button disabled={isDisabled} key={answer} onClick={() => onClick(answer)} className={`answer-button ${answer === rightAnswer ? activeClass : wrongAnswerClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;