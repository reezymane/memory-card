import React, { useState } from "react";
import Characters from "./Characters";

const GameCards = () => { 
    const [displayed, setDisplayed] = useState([]);
    
    return (
        <div className="GameCards">
            <div className="Card1">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card2">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card3">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card4">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card5">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card6">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>

            <div className="Card7">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card8">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card9">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card10">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card11">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card12">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card13">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card14">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card15">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      
            <div className="Card16">
                <Characters 
                  displayed={displayed}
                  setDisplayed={setDisplayed}
                />
            </div>
      </div>
    );
}

export default GameCards;