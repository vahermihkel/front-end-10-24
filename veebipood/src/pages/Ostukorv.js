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
    ostukorvFailist.splice(index,1);
    muudaTooted(ostukorvFailist.slice());
  }

  return (
    <div>
      <button onClick={() => muudaTooted([])}>Tühjenda</button>
      {tooted.map((toode, index) => 
        <div key={index}>
          {toode.nimi}
          <button onClick={() => kustuta(index)}>x</button>
        </div>
      )}
      {tooted.length === 0 && 
        <div>
          Ostukorv on tühi
          <Link to="/">
            Mine avalehele
          </Link>  
        </div>}
      
    </div>
  )
}

export default Ostukorv