
import React, {useState, useEffect} from 'react';
import { Alert } from 'react-alert';
import ReactNotification, { store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css'

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

const Notif = (props) => {

    return(
        <div className="container">
            <h1>You have a safety notification.</h1>
            <ReactNotification />
            <Home />
            {/* <button onClick={()=>{ alert(SittingTips[Math.floor(Math.random()*SittingTips.length)]); }}>alert</button> */}
        </div>
    )
}
/* to make comm */
function Home(){
    const stringmsg = Breaktime + "\n" + (SittingTips[Math.floor(Math.random()*SittingTips.length)])
    const handleOnClickDefault = () =>{
        store.addNotification({
            title:Sitting,
            message:stringmsg,
            type:"warning",
            container:"center",
            insert:"top",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss:{
                duration:2000
            }
        })
    }

    return(
        <div>
            <button onClick={handleOnClickDefault}>
                Tip
            </button>
        </div>
    )
}    

export default Notif;