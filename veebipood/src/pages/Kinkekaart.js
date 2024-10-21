import React, { useState } from 'react'

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);

  return (
    <div>
      <button onClick={() => muudaSumma(20)}>20 €</button>
      <button onClick={() => muudaSumma(50)}>50 €</button>
      <button onClick={() => muudaSumma(100)}>100 €</button>

      <br /><br />

      <div>Kinkekaart {summa}€</div>
    </div>
  )
}

export default Kinkekaart