import React from "react";

const Scoreboard = (props) => {
    return (
        <div className="Scoreboard">
            <p>Score: {props.currentScore}</p>
            <p>Best Score: {props.bestScore}</p>
        </div>
    );
};

export default Scoreboard;