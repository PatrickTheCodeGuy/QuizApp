import React, { useEffect, useState } from 'react';
import './QuestionContainer.css';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState([])
    let [answeredCorrectly, setAnsweredCorrectly ] = useState(false)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [isLoaded, setIsLoaded ] = useState();
    let [score, setScore] = useState(0);

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          setIsLoaded(true)
          
    }, []);

    useEffect(() => {
        console.log("firing off in use Effect for answered", answeredCorrectly)
        if(answeredCorrectly === true){
            setCurrentIndex(currentIndex + 1)
            console.log("current index: ", currentIndex);
        } else {
            // set logic for game over here.
        }
    }, [answeredCorrectly])
    

    // TODO: Add new component to render out questions.
    
    return(
            <div className="question-container">
            {isLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[currentIndex]}
                    setAnsweredCorrectly={setAnsweredCorrectly}
                    answer={questions[currentIndex]['correct_answer']}
                    incorrect={questions[currentIndex]['incorrect_answers']}
                 /> : <h1>Please wait...</h1>}
                
            </div>
            )
    
}

export default QuestionContainer;