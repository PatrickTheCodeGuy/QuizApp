import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/Leaderboard';
import StartMenu from './components/StartMenu';


function App() {
  return (
    <div className="startMenu-container App">
          <div class="leaderboard-container">
            <Leaderboard/>
          </div>
          <div class="game-container">
            <StartMenu/>
          </div>
    </div>
  );
}

export default App;
