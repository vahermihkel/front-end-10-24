import React, { useRef, useState } from 'react'

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);

  const emailRef = useRef();

  // function sisesta() {

  // }

  const [sonum, muudaSonum] = useState();

  const sisesta = () => {
    if (emailRef.current.value === "") {
      muudaSonum("E-mail on jäänud sisestamata!")
    } else {
      muudaSonum("E-mail on sisestatud!");
    }
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(20)}>20 €</button>
      <button className={summa === 50 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(50)}>50 €</button>
      <button className={summa === 100 ? "summa-aktiivne" : "summa"} onClick={() => muudaSumma(100)}>100 €</button>

      <br /><br />

      <div>Kinkekaart {summa}€</div>

      <br /><br />

      <div>{sonum}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta</button> <br />
    </div>
  )
}

export default Kinkekaart