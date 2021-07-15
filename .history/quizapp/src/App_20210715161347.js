import "./App.css";

// Component Imports.
import Leaderboard from "./components/Leaderboard/Leaderboard";
import StartMenu from "./components/StartMenu/StartMenu";

function App() {
  return (
    <div className="startMenu-container App">
      <div className="leaderboard-container">
        <Leaderboard />
      </div>
      <div className="game-container">
        <StartMenu />
      </div>
    </div>
  );
}

export default App;
