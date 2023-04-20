import React from "react";
import GameCards from "./components/GameCards";
import Scoreboard from "./components/Scoreboard";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="title">Naruto Memory Cards!</div>

        <Scoreboard />
      </header>

      <GameCards />

      <footer>Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
