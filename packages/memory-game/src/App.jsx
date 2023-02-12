import { useState } from 'react';
import GameBoard from './components/GameBoard';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <GameBoard />
    </div>
  );
};

export default App;