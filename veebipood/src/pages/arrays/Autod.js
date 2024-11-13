import React, { useState } from 'react'
import autodFailist from "../../data/autod.json"
import ostukorvFailist from "../../data/ostukorv.json"
import { Link } from 'react-router-dom';

// string -->    "Ülemiste".includes()       "Ülemiste".startsWith()     "Ülemiste".length
// array -->     [].filter     [].sort    [].forEach   [].push   [].splice     [].length
// object -->    {"aasta": 2010}  punktiga saan küsida ainult võtme kaudu väärtust
//              {"aasta": 2010}.aasta  --> 2010

function Autod() {
  const [autod, muudaAutod] = useState(autodFailist.slice());

  // kuna sõna, siis localeCompare
  const sorteeriAZ = () => {
    autod.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaAutod(autod.slice());
  }

  // kuna number, siis lahutan
  const hindKasvavalt = () => {
    autod.sort((a,b) => a.hind - b.hind);
    muudaAutod(autod.slice());
  }

  const filtreeriBgaAlgavad = () => {
    const vastus = autod.filter(auto => auto.nimi.startsWith("B"));
    muudaAutod(vastus);
  }

  const arvutaKokku = () => {
    let sum = 0;
    autod.forEach(auto => sum = sum + auto.hind);
    return sum;
  }

  function lisaOstukorvi(auto) {
    ostukorvFailist.push(auto);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={hindKasvavalt}>Hind kasvavalt</button>
      <button onClick={filtreeriBgaAlgavad}>Jäta alles b'ga algavad</button>
      <div>{arvutaKokku()}</div>
      <br /><br />

      {autod.map((auto, index) => 
        <div key={index}>
          {auto.nimi} - {auto.hind}€
          <button onClick={() => lisaOstukorvi(auto)}>Lisa ostukorvi</button>
          <Link to={"/auto/" + index}>
            <button>Vt autot lähemalt</button>
          </Link>
          {/* 
          ei saa välja näidata objekti HTMLs:
          Objects are not valid as a React child (found: object with keys {nimi, hind, aktiivne, pilt})
          */}
        </div>)}
    </div>
  )
}

export default Autod