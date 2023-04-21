import React, { useState, useEffect } from "react";
import Characters from "./Characters";
import randomArray from "../GameModule";

const GameCards = (props) => { 
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
        const incrementScore = () => {
            props.setCurrentScores(props.currentScore + 1);
        };

        const resetScore = () => {
            props.setCurrentScores(0)
        };

        const resetDisplay = () => {
            setDisplayOrder(randomArray());
        };

        const addClickedChar = (charName) => {
            setCharClicked(charClicked => [...charClicked, charName])
        };

        const wasCharClicked = (charIndex) => {
            if (!charClicked.includes(characters[charIndex].name)) {
                addClickedChar(characters[charIndex].name);
                incrementScore();
            } else {
                resetScore();
                console.log("this character was clicked!")
            }

            
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