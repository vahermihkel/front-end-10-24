import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([45, 9, 80, 123, 1000, 51, 77, 321, 91, 23]);

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort();
    muudaHinnad(hinnad.slice());
  }

  return (
    <div>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>


      {hinnad.map((hind, index) => <div key={index}>{hind}</div>)}
    </div>
  )
}

export default Hinnad