import React, { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router';
import './QuestionContainer.css';
import QuestionComponent from './QuestionComponent/QuestionComponent';
import GameOverScreen from '../GameOverScreen/GameOverScreen';

function QuestionContainer() {
    const history = useHistory();
    const [questions, setQuestions] = useState([])
    let [answered, setAnswered ] = useState(false)
    let [currentIndex, setCurrentIndex] = useState(-1);
    let [isLoaded, setIsLoaded ] = useState(false);
    let [score, setScore] = useState(0);

    // Hook to check for initial render
    const [isInitialRender, setIsInitialRender] = useState(true);


    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          setIsLoaded(true)
          setIsInitialRender(false);
          
    }, []);
    

    const setNextQuestion = useEffect(() => {
        if(isLoaded && currentIndex + 1 >= questions.length ){
            history.push({
                pathname: '/template',
                state: { score: score}
            })
        }
        else {
            if(isInitialRender){
                let newScore = score + 100;
                setScore(newScore);
                setCurrentIndex(currentIndex + 1);
            }
        }
      }, [answered]);
   
    
    return(
            <div className="question-container">
                <div>
                    <h3>Score: {score}</h3>
                </div>
            {isLoaded ? <QuestionComponent
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