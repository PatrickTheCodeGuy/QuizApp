import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router";
import "./QuestionContainer.css";
import QuestionComponent from "./QuestionComponent/QuestionComponent";

function QuestionContainer(props) {
  const history = useHistory();
  const [questions, setQuestions] = useState([]);
  let [answered, setAnswered] = useState(false);
  let [currentIndex, setCurrentIndex] = useState(0);
  let [apiHasLoaded, setApiHasLoaded] = useState(false);
  let [score, setScore] = useState(0);
  let propsData = props.location.state;

  //TODO: Setup settings page with score multiplier for difficulty then pass via Link and set on initial render below
  let [scoreMultiplier, setScoreMultiplier] = useState(propsData.multiplier);

  useEffect((props) => {
    async function setData() {
      console.log("props: ", propsData);
      console.log(
        "Difficulty: ",
        propsData["questionDifficultyState"]["difficulty"]
      );
      https://opentdb.com/api.php?amount=10&category=9&difficulty=medium
      let url = `https://opentdb.com/api.php?amount=${propsData.questionNum}&category=${propsData.categoryId}&difficulty=${propsData["questionDifficultyState"]["difficulty"]}`;

      const response = await fetch(url);
      const data = await response.json();
      const results = data.results;
      setQuestions(results);
      setApiHasLoaded(true);
    }

    setData();
  }, []);

  const setNextQuestion = useCallback(
    (newScore, answeredCorrectly) => {
      if (apiHasLoaded && currentIndex + 1 >= questions.length) {
        history.push({
          pathname: "/gameover",
          state: { score: score },
        });
      } else {
        setScore(newScore);
        setCurrentIndex(currentIndex + 1);
      }
      // Use currentIndex to get the updated memoized state(is updated in hook), else we would never get updated state.
    },
    [currentIndex]
  );

  return (
    <div className="question-container">
      {apiHasLoaded ? (
        <div>
          <h3>Score: {score}</h3>
          <h2 className={"addScore "}>+{100 * scoreMultiplier}</h2>
        </div>
      ) : null}
      {apiHasLoaded ? (
        <QuestionComponent
          totalQuestions={currentIndex + 1}
          question={questions[currentIndex]}
          setNextQuestion={setNextQuestion}
          setScore={setScore}
          score={score}
          setAnswered={setAnswered}
          answered={answered}
          answer={questions[currentIndex]["correct_answer"]}
          incorrect={questions[currentIndex]["incorrect_answers"]}
        />
      ) : (
        <div class="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
}

export default QuestionContainer;
