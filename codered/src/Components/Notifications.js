import React, {useState, useEffect} from 'react'

const Notif = (props) => {
    const Sitting = "Hey! You've probably been sitting for the past 30 minutes.";
    const Standing = "Hey! You've probably been moving around a lot for the past 30 minutes.";
    const Breaktime = "It's time for a break. You need one.";
    const SittingTips = [
        "Get up, stretch your arms out.", 
        "Grab some water.",
        "Munch on some snacks.",
        "Posture check.",
        "Get up and meet with some coworkers.",
        "10 push-ups. Now."
    ];

    return(
        <alert>
            <h1>{Sitting}</h1>
            <h2>{Breaktime}</h2>
            <h3>{SittingTips[Math.floor(Math.random()*SittingTips.length)]}</h3>
        </alert>
    )
}

export default Notif;