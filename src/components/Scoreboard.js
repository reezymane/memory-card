import React from "react";

const Scoreboard = (props) => {
    return (
        <div className="Scoreboard">
            <p>Score: {props.scores.currentScore}</p>
            <p>Best Score: {props.scores.bestScore}</p>
        </div>
    );
};

export default Scoreboard;