import React, { useEffect, useState } from 'react';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState(null)
    let [score, setScore] = useState(0);

    useEffect(async() => {
          const response = await fetch('https://opentdb.com/api.php?amount=10')
          const data = await response.json();
          const questions  = data.results;
          setQuestions(questions);
          console.log("questions: ", questions);
    }, []);
    

    // TODO: Add new component to render out questions.
    
    return(
            <div>Hello</div>
            )
    
}

export default QuestionContainer;