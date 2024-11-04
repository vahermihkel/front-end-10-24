import React, { useRef, useState } from 'react'

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState([45, 9, 80, 123, 1000, 51, 77, 321, 91, 23]);
  const hindRef = useRef();

  const kustuta = (index) => {
    hinnad.splice(index, 1);
    muudaHinnad(hinnad.slice());
  }

  const lisa = () => {
    hinnad.push(hindRef.current.value);
    muudaHinnad(hinnad.slice());
    hindRef.current.value = "";
  }

  return (
    <div>
      <label>Uus number</label> <br />
      <input ref={hindRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />

      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Jrknr</th>
            <th>Hind</th>
            <th>Kustuta</th>
          </tr>
        </thead>
        <tbody>
          {hinnad.map((hind, index) => 
          <tr key={index}>
            <td>{index}</td> 
            <td>{index + 1}</td> 
            <td>{hind}</td>
            <td><button onClick={() => kustuta(index)}>x</button></td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default HaldaHinnad