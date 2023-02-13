import GameBoard from './components/GameBoard';
import Scoreboard from './components/Scoreboard';
import './App.css';

const App = () => {
  return (
    <>
      <div className="container">
        <Scoreboard />
        <GameBoard />
      </div>
    </>
  );
};

export default App;