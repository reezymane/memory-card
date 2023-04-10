import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import randomArray from "../GameModule";

const GameCards = () => { 
    const [displayed, setDisplayed] = useState(randomArray());
    const [charClicked, setCharClicked] = useState([]);
    
    return (
        <div className="GameCards">
            <div className="Card1">
                <Characters
                 displayed={displayed[0]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card2">
                <Characters
                 displayed={displayed[1]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card3">
                <Characters
                 displayed={displayed[2]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card4">
                <Characters
                 displayed={displayed[3]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card5">
                <Characters
                 displayed={displayed[4]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card6">
                <Characters
                 displayed={displayed[5]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card7">
                <Characters
                 displayed={displayed[6]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card8">
                <Characters
                 displayed={displayed[7]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card9">
                <Characters
                 displayed={displayed[8]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card10">
                <Characters
                 displayed={displayed[9]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card11">
                <Characters
                 displayed={displayed[10]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card12">
                <Characters
                 displayed={displayed[11]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card13">
                <Characters
                 displayed={displayed[12]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card14">
                <Characters
                 displayed={displayed[13]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card15">
                <Characters
                 displayed={displayed[14]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card16">
                <Characters
                 displayed={displayed[15]}
                 setDisplayed={setDisplayed}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      </div>
    );
}

export default GameCards;