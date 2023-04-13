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
        const characterPreviouslyClicked = (charName) => {
            if (!charClicked.includes(charName)) {
                return false;
            }

            return true;
        };

        document.querySelectorAll(".Card").forEach((card) => {
            card.addEventListener("click", () => {
                const charName = characters[Number(card.dataset.charIndex)].name;
                const previouslyClicked = characterPreviouslyClicked(charName);
                
                if (!previouslyClicked) {
                    setDisplayOrder(randomArray());
                } else {
                    console.log("This character was clicked already!");
                };
            });
        });
    }, []);
    
    return (
        <div className="GameCards">
            <div className="Card" data-char-index={displayOrder[0]}>
                <Characters
                 character={characters[displayOrder[0]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[1]}>
                <Characters
                 character={characters[displayOrder[1]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[2]}>
                <Characters
                 character={characters[displayOrder[2]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[3]}>
                <Characters
                 character={characters[displayOrder[3]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[4]}>
                <Characters
                 character={characters[displayOrder[4]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[5]}>
                <Characters
                 character={characters[displayOrder[5]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>

            <div className="Card" data-char-index={displayOrder[6]}>
                <Characters
                 character={characters[displayOrder[6]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[7]}>
                <Characters
                 character={characters[displayOrder[7]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[8]}>
                <Characters
                 character={characters[displayOrder[8]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[9]}>
                <Characters
                 character={characters[displayOrder[9]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[10]}>
                <Characters
                 character={characters[displayOrder[10]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[11]}>
                <Characters
                 character={characters[displayOrder[11]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[12]}>
                <Characters
                 character={characters[displayOrder[12]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[13]}>
                <Characters
                 character={characters[displayOrder[13]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[14]}>
                <Characters
                 character={characters[displayOrder[14]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      
            <div className="Card" data-char-index={displayOrder[15]}>
                <Characters
                 character={characters[displayOrder[15]]}
                 charClicked={charClicked}
                 setCharClicked={setCharClicked}
                />
            </div>
      </div>
    );
}

export default GameCards;