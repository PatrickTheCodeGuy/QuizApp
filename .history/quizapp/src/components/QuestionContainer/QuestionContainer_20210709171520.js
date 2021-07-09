import React, { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [score, setScore] = useState(0);
    let isLoaded = false;

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          const results = data.results;
          console.log('questions: ', Array.of(results));
          isLoaded = true;
          setQuestions(Array.of(results));
          
    }, []);
    

    // TODO: Add new component to render out questions.
    
    return(
            <div>
            {isLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[currentIndex].question}
                    correctAnswer={questions[currentIndex]['correct_answer']}
                    incorrectAnswers={questions[currentIndex]['incorrect_answers']}
                 /> : <h1>Please wait...</h1>}
                
            </div>
            )
    
}

export default QuestionContainer;