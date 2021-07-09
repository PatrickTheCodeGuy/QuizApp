import React from 'react';
import './QuestionComponent.css';



function QuestionComponent(props) {

    const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);


    return (
        <div>
            <div className="question-text">{props.question.question}</div>
            <div>
                {answers.forEach(answer => {
                    return <button>{answer}</button>
                })}
            </div>
        </div>
    )
    
}

export default QuestionComponent;