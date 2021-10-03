import React, {useState} from 'react';
import logo from './logo.svg';
import Notif from './Components/Notifications';
import TipForm from './Components/tipForm';
import './App.css';

function App() {
  const [currentTip, setCurrentTip] = useState('');
  return (
    <div className="App">
      <nav>
      <h2>Hello sussy bakas</h2>
      </nav>
      <div className="tips">
      </div>
      <div className="notifs">
        <Notif></Notif>
      </div>
      <div className="tipform">
      <TipForm></TipForm>
      </div>
      <div className="worksafe">
      </div>
    </div>
  );
}

export default App;