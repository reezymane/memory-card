import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import randomArray from "../GameModule";
import naruto from "../assets/naruto.jpeg";
import sasuke from "../assets/sasuke.webp";
import sakura from "../assets/sakura.jpg";
import kakashi from "../assets/kakashi.webp";
import shikamaru from "../assets/shikamaru.webp";
import might from "../assets/guy.webp";
import rock from "../assets/rock.webp";
import neji from "../assets/neji.webp";
import hinata from "../assets/hinata.jpeg";
import gaara from "../assets/gaara.jpeg";
import jiraiya from "../assets/jiraiya.webp";
import kisame from "../assets/kisame.jpeg";
import itachi from "../assets/itachi.jpeg";
import minato from "../assets/minato.webp";
import madara from "../assets/madara.webp";
import orochimaru from "../assets/orochimaru.webp";
import "../styles/GameCards.css";

const GameCards = (props) => { 
    const [displayOrder, setDisplayOrder] = useState(randomArray());
    const [charClicked, setCharClicked] = useState([]);
    const [characters] = useState([{
        name: "Naruto Uzumaki",
        img: naruto
    },
    {
        name: "Sasuke Uchiha",
        img: sasuke
    },
    {
        name: "Sakura Haruno",
        img: sakura
    },
    {
        name: "Kakashi Hatake",
        img: kakashi
    },
    {
        name: "Shikamaru Nara",
        img: shikamaru
    },
    {
        name: "Might Guy",
        img: might
    },
    {
        name: "Rock Lee",
        img: rock
    },
    {
        name: "Neji Hyuga",
        img: neji
    },
    {
        name: "Hinata Hyuga",
        img: hinata
    },
    {
        name: "Gaara",
        img: gaara
    },
    {
        name: "Jiraiya",
        img: jiraiya
    },
    {
        name: "Kisame Hoshigaki",
        img: kisame
    },
    {
        name: "Itachi Uchiha",
        img: itachi
    },
    {
        name: "Minato Namikaze",
        img: minato
    },
    {
        name: "Madara Uchiha",
        img: madara
    },
    {
        name: "Orochimaru",
        img: orochimaru
    }]);

    useEffect(() => {
        const incrementScore = () => {
            props.setCurrentScores(props.currentScore + 1);
        };

        const resetScore = () => {
            props.setCurrentScores(0)
        };

        const checkBestScore = () => {
            if (props.currentScore > props.bestScore) {
                props.setBestScore(props.currentScore);
            };
        };

        const resetDisplay = () => {
            setDisplayOrder(randomArray());
        };

        const addClickedChar = (charName) => {
            setCharClicked(charClicked => [...charClicked, charName]);
        };

        const resetClickedChar = () => {
            setCharClicked([]);
        };

        const wasCharClicked = (charIndex) => {
            if (!charClicked.includes(characters[charIndex].name)) {
                addClickedChar(characters[charIndex].name);
                incrementScore();
            } else {
                checkBestScore();
                resetClickedChar();
                resetScore();
            };
        };

        const runFuncsOnClick = (event) => {
            wasCharClicked(event.currentTarget.dataset.charIndex);
            resetDisplay();
        }

        document.querySelectorAll(".Card").forEach((card) => {
            card.addEventListener("click", runFuncsOnClick);
        });

        return () => {
            document.querySelectorAll(".Card").forEach((card) => {
                card.removeEventListener("click", runFuncsOnClick);
            })
        };
    }, [displayOrder]);
    
    return (
        <div className="GameCards">
            <div className="Card" data-char-index={displayOrder[0]}>
                <Characters character={characters[displayOrder[0]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[1]}>
                <Characters character={characters[displayOrder[1]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[2]}>
                <Characters character={characters[displayOrder[2]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[3]}>
                <Characters character={characters[displayOrder[3]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[4]}>
                <Characters character={characters[displayOrder[4]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[5]}>
                <Characters character={characters[displayOrder[5]]}/>
            </div>

            <div className="Card" data-char-index={displayOrder[6]}>
                <Characters character={characters[displayOrder[6]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[7]}>
                <Characters character={characters[displayOrder[7]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[8]}>
                <Characters character={characters[displayOrder[8]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[9]}>
                <Characters character={characters[displayOrder[9]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[10]}>
                <Characters character={characters[displayOrder[10]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[11]}>
                <Characters character={characters[displayOrder[11]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[12]}>
                <Characters character={characters[displayOrder[12]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[13]}>
                <Characters character={characters[displayOrder[13]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[14]}>
                <Characters character={characters[displayOrder[14]]}/>
            </div>
      
            <div className="Card" data-char-index={displayOrder[15]}>
                <Characters character={characters[displayOrder[15]]}/>
            </div>
      </div>
    );
}

export default GameCards;