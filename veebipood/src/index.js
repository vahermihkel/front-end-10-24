import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Navigeerimiseks / URLi vahetuseks / Route-miseks:
// 1. npm install react-router-dom --> pane node_modules kausta 
//      sisse vajalikud failid, millega on võimalik navigeerida
// ! peab olema projekti kaustas
// 2. import { BrowserRouter } from 'react-router-dom'; -->
//   impordime sellest installitud moodulist navigeerimise võimekuse
// 3. <BrowserRouter> ---> ümbritsen <App /> faili BrowserRouteriga, et
// App.js failis oleks võimalik navigeerida
// 4. Lähme App.js faili ja tekitame URLi ja HTMLi vahelisi seoseid

// Module not found: Error: Can't resolve 'react-router-dom'
// Lahendus: Vaadata package.json faili ja kas seal on olemas react-router-dom
//          Kui ei ole, siis installida projekti kausta sisse uuesti

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
