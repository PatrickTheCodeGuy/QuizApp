import React, { useEffect } from 'react';

function QuestionContainer() {
    
    const [questions, setQuestions] = useState({})
    useEffect(() => {
          const questionList = getQuizQuestions(props)
    }, []);


    function getQuizQuestions(props){
        let [score, setScore] = useState(0);

    }
    
    return(
            <div>Questions!</div>
            )
    
}

export default QuestionContainer;