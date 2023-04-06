import React, { useEffect, useState } from "react";

const Characters = (props) => {
    const [displayCharacter, setDisplayCharacter] = useState("");
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

    return (
        <div className="CharacterInfo">
            <p>Name placeholder</p>
            <p>Img placeholder</p>
        </div>
    );
}

export default Characters;