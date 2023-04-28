import React from "react";

export default function Die(props) {

    return (
        <div className="die-face" onClick={props.holdDice}>
            <div className={`die-num ${props.isHeld}`}>{props.value}</div>
        </div>
    )

}

