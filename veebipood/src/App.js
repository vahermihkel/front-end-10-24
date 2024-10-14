//import logo from './logo.svg';
import './App.css';

// igal HTML elemendil peab olema algus ja lõpp või ta on self-closing
// HTMLi omadused pannakse alguse sisse: <div OMADUSED_SIIA></div>

function App() {
  return (
    <div className="App">
       <button className="nupp">Nupp</button>
       <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_1-1344x896.jpg" alt="" />
    </div>
  );
}

export default App;
