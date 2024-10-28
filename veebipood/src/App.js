//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Esindused from './pages/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Kalkulaator from './pages/Kalkulaator';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';


// igal HTML elemendil peab olema algus ja lõpp või ta on self-closing
// HTMLi omadused pannakse alguse sisse: <div OMADUSED_SIIA></div>

function App() {
  return (
    <div className="App">

      <Menyy />
    
      {/* localhost:3000/esindused   <div>10 esindust</div>
          localhost:3000/osta-kinkekaart <div>Kinkekaardi ostmine</div>
      */}

        <Routes>
          <Route path="" element={ <Avaleht /> } />
          <Route path="esindused" element={ <Esindused /> } />
          <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
          <Route path="ostukorv" element={ <Ostukorv /> } />
          <Route path="lisa-toode" element={ <LisaToode /> } />
          <Route path="seaded" element={ <Seaded /> } />
          <Route path="kalkulaator" element={ <Kalkulaator /> } />
          <Route path="*" element={ <NotFound /> } />
        </Routes>

    </div>
  );
}

export default App;


// E 21.10   13.30
// K 23.10   9.00-12.15
// E 28.10   13.30
// K 30.10   13.30
// E 04.11   13.30
// K 06.11   9.00
// T 12.11   13.30
// N 14.11   13.30