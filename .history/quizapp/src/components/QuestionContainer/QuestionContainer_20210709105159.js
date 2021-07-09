import React, { useEffect, useState } from 'react';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState(null)
    let [score, setScore] = useState(0);
    useEffect(() => {
          const questionList = getQuizQuestions()
          setQuestions(questionList);
    }, []);

    // TODO: Add quiz api call.
    function getQuizQuestions(){
        

    }

    // TODO: Add new component to render out questions.
    
    return(
            <div>Questions!</div>
            )
    
}

export default QuestionContainer;