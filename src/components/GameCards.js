import React, { useState } from "react";

const GameCards = () => {
    const [clickedChar, setClickedChar] = useState([]);
    const [characters] = useState([{
        name: "Naruto Uzumaki",
        img: "naruto.jpg"
    },
    {
        name: "Sasuke Uchiha",
        img: "sasuke.jpg"
    },
    {
        name: "Sakura Haruno",
        img: "sakura.jpg"
    },
    {
        name: "Kakashi Hatake",
        img: "kakashi.jpg"
    }])
    
    return (
        <div className="GameCards">
            <div className="Card1"></div>

            <div className="Card2"></div>

            <div className="Card3"></div>

            <div className="Card4"></div>

            <div className="Card5"></div>

            <div className="Card6"></div>

            <div className="Card7"></div>
      
            <div className="Card8"></div>
      
            <div className="Card9"></div>
      
            <div className="Card10"></div>
      
            <div className="Card11"></div>
      
            <div className="Card12"></div>
      
            <div className="Card13"></div>
      
            <div className="Card14"></div>
      
            <div className="Card15"></div>
      
            <div className="Card16"></div>
      </div>
    );
}

export default GameCards;