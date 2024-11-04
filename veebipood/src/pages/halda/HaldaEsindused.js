import React, { useRef, useState } from 'react'

function HaldaEsindused() {         //            0            1                 2
  const [esindused, muudaEsindused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa", "Ämari"]);
  const esindusRef = useRef();

  const kustutaEsimene = () => {
    esindused.splice(0, 1); // .splice --> kustutamiseks
            // number 0 tähendab mitmendat järjekorras
            // number 1 tähendab mitu tükki alates selles elemendist
    muudaEsindused(esindused.slice()); // sama mis .sort() järgselt
// uuendab HTMLi, pannes uuendatud esindused esindused muutuja peale
  }

  const kustutaTeine = () => {
    esindused.splice(1, 1);
    muudaEsindused(esindused.slice());
  }

  const kustutaKolmas = () => {
    esindused.splice(2, 1);
    muudaEsindused(esindused.slice());
  }

  const kustuta = (index) => {
    esindused.splice(index, 1);
    muudaEsindused(esindused.slice());
  }

  const lisaEsindus = () => {
    esindused.push(esindusRef.current.value);
    muudaEsindused(esindused.slice());
    esindusRef.current.value = "";
  }

  return (
    <div>
      <label>Esindus</label> <br />
      <input ref={esindusRef} type="text" /> <br />
      <button onClick={lisaEsindus}>Lisa</button>

      <div>Kokku esindusi: {esindused.length} tk</div>
      {esindused.length > 0 && <button onClick={kustutaEsimene}>Kustuta esimene</button>}
      {esindused.length > 1 && <button onClick={kustutaTeine}>Kustuta teine</button>}
      {esindused.length > 2 && <button onClick={kustutaKolmas}>Kustuta kolmas</button>}
      {/*             Ülemiste, 0
                  Rocca al Mare, 1
      */}
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>JrkNr</th>
            <th>Esindus</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {esindused.map((esindus, index) => 
            <tr key={index}>
              <td>{index}</td>
              <td>{index+1}</td>
              <td>{esindus}</td>
              <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaEsindused