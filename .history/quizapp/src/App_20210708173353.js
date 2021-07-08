import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/Leaderboard/Leaderboard';
import StartMenu from './components/StartMenu/StartMenu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="startMenu-container App">
          <div class="leaderboard-container">
            <Leaderboard/>
          </div>
          <div class="game-container">
            <StartMenu/>
          </div>
      </div>
    </Router>
    
  );
}

export default App;
