import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import './QuestionContainer.css';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    const history = useHistory();
    const [questions, setQuestions] = useState([])
    let [answered, setAnswered ] = useState(false)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [apiHasLoaded, setApiHasLoaded ] = useState(false);
    let [score, setScore] = useState(0);

    //TODO: Setup settings page with score multiplier for difficulty then pass via Link and set on initial render below
    let [scoreMultiplier, setScoreMultiplier ] = useState(1);

    

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          setApiHasLoaded(true)
          
    }, []);
    

    const setNextQuestion = useCallback((newScore, answeredCorrectly) => {
        if(apiHasLoaded && currentIndex >= questions.length ){
            history.push({
                pathname: '/template',
                state: { score: score}
            })
        }
        else {
            setScore(newScore)
            setCurrentIndex(currentIndex + 1);
        }
        // Use currentIndex to get the updated memoized state(is updated in hook), else we would never get updated state.
      }, [currentIndex]);
   
    
    return(
            <div className="question-container">
                <div>
                    <h3>Score: {score}</h3>
                    <h2 className={'addScore ' }>+{100 * scoreMultiplier}</h2>
                </div>
            {apiHasLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[currentIndex]}
                    setNextQuestion={setNextQuestion}
                    setScore={setScore}
                    score={score}
                    setAnswered={setAnswered}
                    answered={answered}
                    answer={questions[currentIndex]['correct_answer']}
                    incorrect={questions[currentIndex]['incorrect_answers']}
                 /> : <h1>Please wait...</h1>}
            </div>
            )
    
}

export default QuestionContainer;