import React, { useEffect, useState } from 'react';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState({})
    useEffect(() => {
          const questionList = getQuizQuestions()
          setQuestions(questionList);
    }, []);

    // TODO: Add quiz api call.
    function getQuizQuestions(){
        let [score, setScore] = useState(0);

    }

    // TODO: Add new component to render out questions.
    
    return(
            <div>Questions!</div>
            )
    
}

export default QuestionContainer;