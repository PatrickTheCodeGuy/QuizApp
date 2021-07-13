import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import './QuestionContainer.css';
import QuestionComponent from './QuestionComponent/QuestionComponent';
import GameOverScreen from '../GameOverScreen/GameOverScreen';

function QuestionContainer() {
    const history = useHistory();
    const [questions, setQuestions] = useState([])
    let [answered, setAnswered ] = useState(false)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [apiHasLoaded, setApiHasLoaded ] = useState(false);
    let [score, setScore] = useState(0);
    let [scoreMultiplier, setScoreMultiplier ] = useState(1);
    let [answeredClass, setAnsweredClass ] = useState(0);
    
    let component = `<h2 className='addScore'></h2>`;
    

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          setApiHasLoaded(true)
          
    }, []);

    useEffect(() => {
        setAnsweredClass(0)
    }, [answeredClass])
    

    const setNextQuestion = useCallback((newScore, answeredCorrectlyBit) => {
        if(apiHasLoaded && currentIndex >= questions.length ){
            history.push({
                pathname: '/template',
                state: { score: score}
            })
        }
        else {
            setAnsweredClass(answeredCorrectlyBit)
            switch(answeredCorrectlyBit) {
                case 1:
                    component = <h2 className='addScore showAddScore'>+{100 * scoreMultiplier}</h2>
                case 2:
                    component = <h2 className='addScore showNoAddScore'>+{0 * scoreMultiplier}</h2>
                default:
                    component = <h2 className='addScore'></h2>
            }
            setScore(newScore)
            setCurrentIndex(currentIndex + 1);
        }
        // Use currentIndex to get the updated memoized state(is updated in hook), else we would never get updated state.
      }, [currentIndex]);
    
   
    
    return(
            <div className="question-container">
                <div>
                    {component}
                    <h3>Score: {score}</h3> 
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