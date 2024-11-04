//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Esindused from './pages/arrays/Esindused';
import Kinkekaart from './pages/Kinkekaart';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import Kalkulaator from './pages/Kalkulaator';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';


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
          <Route path="osta-kinkekaart" element={ <Kinkekaart /> } />
          <Route path="ostukorv" element={ <Ostukorv /> } />
          <Route path="lisa-toode" element={ <LisaToode /> } />
          <Route path="seaded" element={ <Seaded /> } />
          <Route path="kalkulaator" element={ <Kalkulaator /> } />

          <Route path="esindused" element={ <Esindused /> } />
          <Route path="hinnad" element={ <Hinnad /> } />
          <Route path="tootajad" element={ <Tootajad /> } />
          <Route path="tooted" element={ <Tooted /> } />

          <Route path="halda-esindused" element={ <HaldaEsindused /> } />
          <Route path="halda-hinnad" element={ <HaldaHinnad /> } />
          <Route path="halda-tootajad" element={ <HaldaTootajad /> } />
          <Route path="halda-tooted" element={ <HaldaTooted /> } />

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
//------------
// 8.  K 06.11   9.00

// 9.  K 13.11   13.30
// 10. R 15.11   13.30

// 11. E 18.11   13.30
// 12. K 20.11   13.30