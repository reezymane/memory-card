import React from "react";
import "../styles/Characters.css";

const Characters = (props) => {
    return (
        <div className="CharacterInfo">
            <div className="CharImg">{props.character.img}</div>
            <div className="CharName">{props.character.name}</div>
        </div>
    );
}

export default Characters;