import React, { useEffect, useState } from 'react';
import QuestionComponent from './QuestionComponent/QuestionComponent';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState([])
    let [currentIndex, setCurrentIndex] = useState(0);
    let isLoaded = false;
    let [score, setScore] = useState(0);

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          const results = data.results;
          setQuestions(results);
          isLoaded = true;
          
    }, []);
    

    // TODO: Add new component to render out questions.
    
    return(
            <div>
            {isLoaded ? <QuestionComponent
                    totalQuestions={currentIndex + 1}
                    question={questions}
                 /> : <h1>Please wait...</h1>}
                
            </div>
            )
    
}

export default QuestionContainer;