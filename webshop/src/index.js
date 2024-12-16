import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom" ;
import { CartSumProvider } from './store/CartSumContext';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* globaalsus, kus paistab mul see globaalne muutuja välja
    PRAEGU: App.js sees ja kõikides kohtades mis on omakorda App.js sees
    */}
      <CartSumProvider>
        <App />
      </CartSumProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// 15. E 02.12   13.30-16.45   
// 16. K 04.12   13.30-16.45 andmebaas
// 17. K 11.12   13.30-16.45 kogus ostukorvis, css moodulid, typescript, context 
// 18. K 18.12   15.00-16.30  2ak/h
// lõpuprojekt: vabalt valitud teemal. Firebase üles laetud.