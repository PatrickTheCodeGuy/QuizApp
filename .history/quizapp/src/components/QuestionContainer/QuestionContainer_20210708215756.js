import React, { useEffect } from 'react';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState({})
    useEffect(() => {
          const questionList = getQuizQuestions(props)
    }, []);

    // TODO: Add quiz api call.
    function getQuizQuestions(props){
        let [score, setScore] = useState(0);

    }

    // TODO: Add new component to render out questions.
    
    return(
            <div>Questions!</div>
            )
    
}

export default QuestionContainer;