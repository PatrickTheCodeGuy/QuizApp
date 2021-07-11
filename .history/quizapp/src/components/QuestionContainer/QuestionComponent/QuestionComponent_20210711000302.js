import React, {useState, useCallback, useEffect} from 'react';
import './QuestionComponent.css';
import { replaceSpecialCharacters } from './specialCharacters';

// Basic shuffle function to shuffle answers
function shuffleArray(array)  {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
    return array;
}
/**
 * Strips and replaces words that have special characters e.x. `&quot;`
 * @param {string} data Either a String or an Array of Strings.
 * @return {string} The scrubbed String OR array of Strings.
 */
function replaceSpecialString(data) {
    let scrubbedString = replaceSpecialCharacters(data)
    console.log("scrubbed string: ", scrubbedString)
    return scrubbedString;
    
}

function QuestionComponent(props) {
    // Sets active class of button using a string in className.
    let [ activeClass, setActiveClass ] = useState('')
    // Made to reset wrong button className.
    let [ wrongAnswerClass, setWrongAnswerClass] = useState('');
    let [ rightAnswer, setRightAnswer ] = useState(props.answer)
    let [ isDisabled, setIsDisabled ] = useState(false);

    // Spread in the incorrect answers with the correct answer on init.
    let [ answers, setAnswers ] = useState(shuffleArray(replaceSpecialString([...props.incorrect, props.answer])));

    // Flip boolean to help rerender component.
    let booleanCheck = false;

    // When props update, reset button styling.
    useEffect(() => {
        // Reset styling
        setActiveClass('')
        setWrongAnswerClass('')
        setIsDisabled(false)
        setRightAnswer(props.answer)

        // Replace special characters with their actual string variant.
        setAnswers(shuffleArray(replaceSpecialString([...props.incorrect, props.answer])));
    }, [props])
    
    const onClick = useCallback((answer) => {
        // Disable all buttons to prevent re-answering.
        setIsDisabled(true)
        // Set state of active class to correct, then set it on the className in html.
        setActiveClass('correct')
        // Needed to set the incorrect buttons to red, and reset styling on new questions.
        setWrongAnswerClass('wrong')
        setTimeout(() => {
            // Keep component level flip to re render component and add 1 to currentIndex BAD SOLUTION.
            booleanCheck = !booleanCheck;
            props.setAnsweredCorrectly(booleanCheck);
        }, 5000)
        
    }, [] )
    


    return (
        <div className="question-card">
            <h3 className="question-text">{replaceSpecialString(props.question.question)}</h3>
            <div className="answers-button-container">
                {answers.map(answer => { return <button disabled={isDisabled} key={answer} onClick={() => onClick(answer)} className={`answer-button ${answer === props.answer ? activeClass : wrongAnswerClass}`}>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;