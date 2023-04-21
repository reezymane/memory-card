import React, { useState } from "react";
import GameCards from "./components/GameCards";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  const [currentScore, setCurrentScores] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  
  return (
    <div className="App">
      <header>
        <div className="title">Naruto Memory Cards!</div>

        <Scoreboard
         currentScore={currentScore}
         bestScore={bestScore}
        />
      </header>

      <GameCards
       currentScore={currentScore}
       setCurrentScores={setCurrentScores}
       bestScore={bestScore}
       setBestScore={setBestScore}
      />

      <footer>Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
