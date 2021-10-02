import React, {useState} from 'react';
import logo from './logo.svg';
import notif from './Components/Notifications';
import './App.css';
import TipForm from './Components/tipForm';
import Notif from './Components/Notifications';

function App() {
  const [currentTip, setCurrentTip] = useState('');
  return (
    <div className="App">
      <nav>
      <h2>Hello sussy bakas</h2>
      </nav>
      <header className="App-header">
        <h2>I am the Godfather</h2>
        <TipForm>{currentTip}</TipForm>
        <Notif></Notif>
      </header>
    </div>
  );
}

export default App;
