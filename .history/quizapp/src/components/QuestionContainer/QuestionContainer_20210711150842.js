import React, { useEffect, useState, useCallback } from 'react';
import './QuestionContainer.css';
import QuestionComponent from './QuestionComponent/QuestionComponent';
import GameOverScreen from '../GameOverScreen/GameOverScreen';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState([])
    let [answeredCorrectly, setAnsweredCorrectly ] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(-1);
    let [isLoaded, setIsLoaded ] = useState(false);
    let [score, setScore] = useState(0);

    

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=2&type=multiple')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          setIsLoaded(true)
          
    }, []);

    const setNextQuestion = useEffect(() => {
        if(isLoaded && currentIndex + 1 >= questions.length){
            alert('game over');
            return <GameOverScreen />;
        }
        else {
            setCurrentIndex(currentIndex + 1);
        }
      }, [answeredCorrectly]);
    
    

    // TODO: Add new component to render out questions.
    
    return(
            <div className="question-container">
            {isLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[currentIndex]}
                    setNextQuestion={setNextQuestion}
                    setAnsweredCorrectly={setAnsweredCorrectly}
                    answeredCorrectly={answeredCorrectly}
                    answer={questions[currentIndex]['correct_answer']}
                    incorrect={questions[currentIndex]['incorrect_answers']}
                 /> : <h1>Please wait...</h1>}
            </div>
            )
    
}

export default QuestionContainer;