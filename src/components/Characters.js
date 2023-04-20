import React from "react";

const Characters = (props) => {
    return (
        <div className="CharacterInfo">
            <p>{props.character.name}</p>
            <p>{props.character.img}</p>
        </div>
    );
}

export default Characters;