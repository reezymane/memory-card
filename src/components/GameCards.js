import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import randomArray from "../GameModule";

const GameCards = () => { 
    const [displayOrder, setDisplayOrder] = useState(randomArray());
    const [charClicked, setCharClicked] = useState([]);
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
    },
    {
        name: "Shikamaru Nara",
        img: "shikamaru.jpg"
    },
    {
        name: "Might Guy",
        img: "might.jpg"
    },
    {
        name: "Rock Lee",
        img: "rock.jpg"
    },
    {
        name: "Neji Hyuga",
        img: "neji.jpg"
    },
    {
        name: "Hinata Hyuga",
        img: "hinata.jpg"
    },
    {
        name: "Gaara",
        img: "gaara.jpg"
    },
    {
        name: "Jiraiya",
        img: "jiraiya.jpg"
    },
    {
        name: "Kisame Hoshigaki",
        img: "kisame.jpg"
    },
    {
        name: "Itachi Uchiha",
        img: "itachi.jpg"
    },
    {
        name: "Minato Namikaze",
        img: "minato.jpg"
    },
    {
        name: "Madara Uchiha",
        img: "madara.jpg"
    },
    {
        name: "Orochimaru",
        img: "orochimaru.jpg"
    }]);

    useEffect(() => {
        
        const updateScoreOnClick = () => {
            if (true) {
                console.log(charClicked);
                
            }
        };

        document.querySelectorAll(".Card").forEach((card) => {
            card.addEventListener("click", updateScoreOnClick);
        })
        
    }, []);
    
    return (
        <div className="GameCards">
            <div className="Card">
                <p>{characters[displayOrder[0]].name}</p>
                <p>{characters[displayOrder[0]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[1]].name}</p>
                <p>{characters[displayOrder[1]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[2]].name}</p>
                <p>{characters[displayOrder[2]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[3]].name}</p>
                <p>{characters[displayOrder[3]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[4]].name}</p>
                <p>{characters[displayOrder[4]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[5]].name}</p>
                <p>{characters[displayOrder[5]].img}</p>
            </div>

            <div className="Card">
                <p>{characters[displayOrder[6]].name}</p>
                <p>{characters[displayOrder[6]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[7]].name}</p>
                <p>{characters[displayOrder[7]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[8]].name}</p>
                <p>{characters[displayOrder[8]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[9]].name}</p>
                <p>{characters[displayOrder[9]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[10]].name}</p>
                <p>{characters[displayOrder[10]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[11]].name}</p>
                <p>{characters[displayOrder[11]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[12]].name}</p>
                <p>{characters[displayOrder[12]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[13]].name}</p>
                <p>{characters[displayOrder[13]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[14]].name}</p>
                <p>{characters[displayOrder[14]].img}</p>
            </div>
      
            <div className="Card">
                <p>{characters[displayOrder[15]].name}</p>
                <p>{characters[displayOrder[15]].img}</p>
            </div>
      </div>
    );
}

export default GameCards;