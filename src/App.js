import React, { useState } from "react";
import GameCards from "./components/GameCards";
import Scoreboard from "./components/Scoreboard";
import './styles/App.css'

const App = () => {
  const [currentScore, setCurrentScores] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <div className="App">
      <header>
        <div className="title">Naruto Memory Cards!</div>

        <div className="GameDetails">Get points by clicking on an image but don't click on any more than once!</div>

        <Scoreboard
         currentScore={currentScore}
         bestScore={bestScore}
        />
      </header>

      <div className="MainContainer">
        <GameCards
         currentScore={currentScore}
         setCurrentScores={setCurrentScores}
         bestScore={bestScore}
         setBestScore={setBestScore}
        />
      </div>
      

      <footer>Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
