import logo from './logo.svg';
import notif from './Components/Notifications';
import './App.css';

function App() {
<<<<<<< Updated upstream
    return ( <
        div className = "App" >
        <
        nav >
        <
        h2 > Chi is gay < /h2> <
        /nav> <
        header className = "App-header" >
        <
        h2 > No, I am the godfather < /h2> <
        /header> <
        div >
        <
        notif / >
        <
        /div> <
        /div>
    );
=======
  const [currentTip, setCurrentTip] = useState('');
  return (
    <div className="App">
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
      </div>
    </div>
  );
>>>>>>> Stashed changes
}

export default App;