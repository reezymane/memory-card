import React from "react";

const Characters = (props) => {
    return (
        <div className="CharacterInfo">
            <div className="CharName">{props.character.img}</div>
            <div className="CharImg">{props.character.name}</div>
        </div>
    );
}

export default Characters;