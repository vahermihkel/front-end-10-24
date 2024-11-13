import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json"

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON.slice());
  const hindRef = useRef();

  const kustuta = (index) => {
    hinnadJSON.splice(index, 1); // võtan failist ühe hinna vähemaks
    muudaHinnad(hinnadJSON.slice()); // uuenda failist
  }

  const lisa = (event) => {
    console.log(event);
    if (event.key !== "Enter" && event.type !== "click") {
      return;
    }
    hinnadJSON.push({"number": hindRef.current.value, "lisaja": "sisselogitud_kasutaja"});
    muudaHinnad(hinnadJSON.slice());
    hindRef.current.value = "";
  }

  return (
    <div>
      <label>Uus number</label> <br />
      <input onKeyUp={lisa} ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Jrknr</th>
            <th>Hind</th>
            <th>Lisaja</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
          <tr key={index}>
            <td>{index}</td> 
            <td>{index + 1}</td> 
            <td>{hind.number}</td>
            <td>{hind.lisaja}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad