import React, { useState } from 'react';
import logo from './logo.svg';
import Notif from './Components/Notifications';
import TipForm from './Components/tipForm';
import Photo from './Components/photos';
import './App.css';

function App() {
    const [currentTip, setCurrentTip] = useState('');
    return ( 
        <div className = "App" >
        <nav>
        <h2> Chi is god </h2> 
        </nav> 
        <div className="forms">
        <div className = "tips" >
        <Photo></Photo>
        </div> 
        <div className = "notifs" >
        <Notif> </Notif> 
        </div> 
        </div>
        <div className = "tipform" >
        <TipForm> </TipForm> 
        </div> 
        </div>
    );
}

export default App;