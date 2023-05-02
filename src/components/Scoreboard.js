import React from "react";
import '../styles/Scoreboard.css'

const Scoreboard = (props) => {
    return (
        <div className="Scoreboard">
            <div>Score: {props.currentScore}</div>
            <div>Best Score: {props.bestScore}</div>
        </div>
    );
};

export default Scoreboard;