<<<<<<< Updated upstream
import React, {useState} from 'react';
import logo from './logo.svg';
import Notif from './Components/Notifications';
import TipForm from './Components/tipForm';
=======
//import logo from './logo.svg';
>>>>>>> Stashed changes
import './App.css';

function App() {
  const [currentTip, setCurrentTip] = useState('');
  return (
    <div className="App">
<<<<<<< Updated upstream
      <nav>
      <h2>Hello sussy bakas</h2>
      </nav>
      <div className="tips">
        <h2>I am the Godfather</h2>
      </div>
      <div className="notifs">
        <Notif></Notif>
      </div>
      <div className="tipform">
      <TipForm></TipForm>
=======
      <div className="worksafe">
      <header className="App-header">
        <p class="p2">MOCHI</p>
      </header>
      <p class="p3">This is a paragraph, shown in the Times New Roman font.</p>
>>>>>>> Stashed changes
      </div>
    </div>
  );
}

export default App;