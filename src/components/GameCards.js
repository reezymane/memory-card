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
        
        const characterWasClicked = () => {
            if (true) {
                setCharClicked(charClicked => [...charClicked, "naruto"]);
            }
        };

        document.querySelectorAll(".Card").forEach((card) => {
            card.addEventListener("click", () => {
                characterWasClicked();

                console.log(charClicked);
            });
        });
        
    }, []);
    
    return (
        <div className="GameCards">
            <div className="Card" data-char-index="0">
                <Characters character={characters[displayOrder[0]]}/>
            </div>

            <div className="Card" data-char-index="1">
                <Characters character={characters[displayOrder[1]]}/>
            </div>

            <div className="Card" data-char-index="2">
                <Characters character={characters[displayOrder[2]]}/>
            </div>

            <div className="Card" data-char-index="3">
                <Characters character={characters[displayOrder[3]]}/>
            </div>

            <div className="Card" data-char-index="4">
                <Characters character={characters[displayOrder[4]]}/>
            </div>

            <div className="Card" data-char-index="5">
                <Characters character={characters[displayOrder[5]]}/>
            </div>

            <div className="Card" data-char-index="6">
                <Characters character={characters[displayOrder[6]]}/>
            </div>
      
            <div className="Card" data-char-index="7">
                <Characters character={characters[displayOrder[7]]}/>
            </div>
      
            <div className="Card" data-char-index="8">
                <Characters character={characters[displayOrder[8]]}/>
            </div>
      
            <div className="Card" data-char-index="9">
                <Characters character={characters[displayOrder[9]]}/>
            </div>
      
            <div className="Card" data-char-index="10">
                <Characters character={characters[displayOrder[10]]}/>
            </div>
      
            <div className="Card" data-char-index="11">
                <Characters character={characters[displayOrder[11]]}/>
            </div>
      
            <div className="Card" data-char-index="12">
                <Characters character={characters[displayOrder[12]]}/>
            </div>
      
            <div className="Card" data-char-index="13">
                <Characters character={characters[displayOrder[13]]}/>
            </div>
      
            <div className="Card" data-char-index="14">
                <Characters character={characters[displayOrder[14]]}/>
            </div>
      
            <div className="Card" data-char-index="15">
                <Characters character={characters[displayOrder[15]]}/>
            </div>
      </div>
    );
}

export default GameCards;