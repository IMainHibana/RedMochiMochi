import React, {useState} from 'react';
import logo from './logo.svg';
import notif from './Components/Notifications';
import './App.css';
import TipForm from './tipForm';

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
      </header>
      <div>
        <notif/>
      </div>
    </div>
  );
}

export default App;
