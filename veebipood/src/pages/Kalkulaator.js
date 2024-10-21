import React, { useState } from 'react'

function Kalkulaator() {
  const [vaade, muudaVaade] = useState("standard");

  const [number, muudaNumber] = useState(0);


  return (
    <div>
      <div>{vaade}</div>
      <button onClick={() => muudaVaade("standard")}>Standard kalkulaator</button>
      <button onClick={() => muudaVaade("laenu")}>Laenukalkulaator</button>
      <button onClick={() => muudaVaade("maksimaalne")}>Maksimaalne limiit</button>

      {vaade === "standard" &&
      <div>
        <div>{number * 3.65}</div>
        <button onClick={() => muudaNumber(1)}>1</button>
        <button onClick={() => muudaNumber(2)}>2</button>
        <button onClick={() => muudaNumber(3)}>3</button>
        <br />
        <button onClick={() => muudaNumber(4)}>4</button>
        <button onClick={() => muudaNumber(5)}>5</button>
        <button onClick={() => muudaNumber(6)}>6</button>
        <br />
        <button onClick={() => muudaNumber(7)}>7</button>
        <button onClick={() => muudaNumber(8)}>8</button>
        <button onClick={() => muudaNumber(9)}>9</button>   
      </div>}

      {vaade === "laenu" && 
        <div>
          Kuumakse: {}
        </div>
      }

      {vaade === "maksimaalne" && 
        <div>
          Maksimaalne pakutav limiit: {}
        </div>
      }
    </div>
  )
}

export default Kalkulaator