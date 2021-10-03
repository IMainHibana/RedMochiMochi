import React, {useState, useEffect} from 'react';

const Notif = (props) => {
    
    const Sitting = "Hey! You've probably been sitting for the past 30 minutes";
    const Breaktime = "It's time for a break. You need one.";

    return(
        <div>
            {Sitting},
            {Breaktime}
        </div>
    )
}

export default Notif;