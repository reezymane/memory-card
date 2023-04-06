import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import randomArray from "../GameModule";

const GameCards = () => { 
    const [displayed, setDisplayed] = useState(randomArray());
    
    return (
        <div className="GameCards">
            <div className="Card1">
                <Characters displayed={displayed[0]}/>
            </div>

            <div className="Card2">
                <Characters displayed={displayed[1]}/>
            </div>

            <div className="Card3">
                <Characters displayed={displayed[2]}/>
            </div>

            <div className="Card4">
                <Characters displayed={displayed[3]}/>
            </div>

            <div className="Card5">
                <Characters displayed={displayed[4]}/>
            </div>

            <div className="Card6">
                <Characters displayed={displayed[5]}/>
            </div>

            <div className="Card7">
                <Characters displayed={displayed[6]}/>
            </div>
      
            <div className="Card8">
                <Characters displayed={displayed[7]}/>
            </div>
      
            <div className="Card9">
                <Characters displayed={displayed[8]}/>
            </div>
      
            <div className="Card10">
                <Characters displayed={displayed[9]}/>
            </div>
      
            <div className="Card11">
                <Characters displayed={displayed[10]}/>
            </div>
      
            <div className="Card12">
                <Characters displayed={displayed[11]}/>
            </div>
      
            <div className="Card13">
                <Characters displayed={displayed[12]}/>
            </div>
      
            <div className="Card14">
                <Characters displayed={displayed[13]}/>
            </div>
      
            <div className="Card15">
                <Characters displayed={displayed[14]}/>
            </div>
      
            <div className="Card16">
                <Characters displayed={displayed[15]}/>
            </div>
      </div>
    );
}

export default GameCards;