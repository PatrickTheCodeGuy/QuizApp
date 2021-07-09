import React, { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState(null)
    let [currentIndex, setCurrentIndex] = useState(0);
    let [score, setScore] = useState(0);

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          setQuestions(data.results);
          console.log('questions: ', questions)
    }, []);
    

    // TODO: Add new component to render out questions.
    
    return(
            <div>
                <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions[currentIndex].question}
                    correctAnswer={questions[currentIndex]['correct_answer']}
                    incorrectAnswers={questions[currentIndex]['incorrect_answers']}
                 />
            </div>
            )
    
}

export default QuestionContainer;