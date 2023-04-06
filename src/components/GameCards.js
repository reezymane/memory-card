import React, { useState, useEffect } from "react";
import Characters from "./Characters";

const GameCards = () => { 
    const [displayed, setDisplayed] = useState([]);

    useEffect(() => {
      let randomIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0);

      if (displayed.length < 16) {
        while (displayed.includes(randomIndex)) {
         randomIndex = Math.floor(Math.random() * (15 - 0 + 1) + 0); 
        };

        setDisplayed(displayed => [...displayed, randomIndex])
      }

      console.log(displayed);
    }, [displayed])
    
    return (
        <div className="GameCards">
            <div className="Card1">
                <Characters />
            </div>

            <div className="Card2">
                <Characters />
            </div>

            <div className="Card3">
                <Characters />
            </div>

            <div className="Card4">
                <Characters />
            </div>

            <div className="Card5">
                <Characters />
            </div>

            <div className="Card6">
                <Characters />
            </div>

            <div className="Card7">
                <Characters />
            </div>
      
            <div className="Card8">
                <Characters />
            </div>
      
            <div className="Card9">
                <Characters />
            </div>
      
            <div className="Card10">
                <Characters />
            </div>
      
            <div className="Card11">
                <Characters />
            </div>
      
            <div className="Card12">
                <Characters />
            </div>
      
            <div className="Card13">
                <Characters />
            </div>
      
            <div className="Card14">
                <Characters />
            </div>
      
            <div className="Card15">
                <Characters />
            </div>
      
            <div className="Card16">
                <Characters />
            </div>
      </div>
    );
}

export default GameCards;