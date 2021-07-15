import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Component Imports
import App from "./App";
import GameInfo from "./components/GameInfo/GameInfo";
import QuestionContainer from "./components/QuestionContainer/QuestionContainer";

//Web vital import
import reportWebVitals from "./reportWebVitals";

// Library Imports
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import GameOverScreen from "./components/GameOverScreen/GameOverScreen";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/newGame" component={GameInfo} />
        <Route path="/questions" component={QuestionContainer} />
        <Route path="/gameover" component={GameOverScreen} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
