import React, { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [isLoaded, setIsLoaded ] = useState();
    let [score, setScore] = useState(0);

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          const results = data.results;
          console.log('questions: ', results);
          setQuestions(results);
          
    }, [questions]);

    useEffect(() => {
        setIsLoaded(true);
    }, [isLoaded])
    

    // TODO: Add new component to render out questions.
    
    return(
            <div>
            {isLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[0].question}
                    correctAnswer={questions[0]['correct_answer']}
                    incorrectAnswers={questions[0]['incorrect_answers']}
                 /> : <h1>Please wait...</h1>}
                
            </div>
            )
    
}

export default QuestionContainer;