import React from "react";
import "../styles/Characters.css";

const Characters = (props) => {
    return (
        <div className="CharacterInfo">
            <img src={props.character.img} alt="character"/>
            <div className="CharName">{props.character.name}</div>
        </div>
    );
}

export default Characters;