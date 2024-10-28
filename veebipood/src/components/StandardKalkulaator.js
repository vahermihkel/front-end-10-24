import React, { useState } from 'react'

function StandardKalkulaator() {
  const [number, muudaNumber] = useState(0);

  return (
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
    </div>
  )
}

export default StandardKalkulaator