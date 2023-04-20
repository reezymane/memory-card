import React from "react";
import GameCards from "./components/GameCards";

const App = () => {
  return (
    <div className="App">
      <header>
        <div className="title">Naruto Memory Cards!</div>
        
      </header>

      <GameCards />

      <footer>Copyright <span>&copy;</span> ReezyTech</footer>
    </div>
  );
}

export default App;
