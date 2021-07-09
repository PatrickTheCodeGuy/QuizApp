import React, {useState} from 'react';
import './QuestionComponent.css';



function QuestionComponent(props) {

    // const [ answers, setAnswers ] = useState([...props.incorrect, props.answer]);


    return (
        <div>
            <div className="question-text">{props.question.question}</div>
            <div>
                {console.log(props)}
            </div>
        </div>
    )
    
}

export default QuestionComponent;