import React, { useState } from "react";
import GameCards from "./components/GameCards";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  const [scores, setScores] = useState([
    {
      currentScore: 0,
      bestScore: 0
    }
  ]);
  
  return (
    <div className="App">
      <header>
        <div className="title">Naruto Memory Cards!</div>

        <Scoreboard
         scores={scores}
         setScores={setScores}
        />
      </header>

      <GameCards />

      <footer>Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
