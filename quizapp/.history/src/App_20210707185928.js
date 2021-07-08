import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/Leaderboard';


function App() {
  return (
    <div className="startMenu-container App">
          <div class="leaderboard-container">
            <Leaderboard/>
          </div>
          <div class="game-container">Options 2</div>
    </div>
  );
}

export default App;
