import React, { useState } from 'react' // Reactist tuleb: useState, useRef
import { Link } from 'react-router-dom' // URL-ga seotud: Link, Route, Routes
import ostukorvFailist from "../data/ostukorv.json";

// kirjutamisel 2 varianti:
// 1. Emmet      div + enter --->   <div></div>
//             button + enter --->  <button></button>
// 2. Soovin importi     <Link     dropdownist --->   Link        react-router-dom
//                       <Page     dropdownist --->   Page        ./pages/Page

function Ostukorv() {
  const [tooted, muudaTooted] = useState(ostukorvFailist.slice());

  function kustuta(index) {
    ostukorvFailist.splice(index,1); // splice(mitmendat, mitu tk)
    muudaTooted(ostukorvFailist.slice());
  }

  function tyhjenda() {
    ostukorvFailist.splice(0);  // alates 0ndast (esimesest) lõpuni välja
    muudaTooted(ostukorvFailist.slice());
  }

  return (
    <div>
      <button onClick={tyhjenda}>Tühjenda</button>
      {tooted.map((toode, index) => 
        <div key={index}>
          <img src={toode.pilt} style={{"width": "50px"}} alt="" />
          {toode.nimi} - {toode.hind}€  
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}
      {tooted.length === 0 && 
        <div>
          Ostukorv on tühi
          <Link to="/tooted">
            Mine tooteid lisama
          </Link>  
        </div>}
      
    </div>
  )
}

export default Ostukorv