import React, {useState, useEffect} from 'react';

const Notif = (props) => {
    
    Sitting = "Hey! You've probably been sitting for the past 30 minutes";
    Breaktime = "It's time for a break. You need one.";

    return(
        <div>
            {Sitting},
            {Breaktime}
        </div>
    )
}

export default Notif;