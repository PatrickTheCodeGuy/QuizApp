import React, { useEffect } from 'react';

class QuestionContainer extends React.Component {
    constructor(props){
        super(props);
        // TODO add state for questions
    }

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, []);


    getQuizQuestions(){

    }


    render(){
        return(
            <div>Questions!</div>
        )
    }
}

export default QuestionContainer;