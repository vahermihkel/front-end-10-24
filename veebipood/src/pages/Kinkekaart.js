import React, { useRef, useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";

function Kinkekaart() {
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1);

  const emailRef = useRef();

  // function sisesta() {

  // }

  const [sonum, muudaSonum] = useState();

  const sisesta = () => {
    if (emailRef.current.value === "") {
      muudaSonum("E-mail on jäänud sisestamata!")
    } else {
      muudaSonum("Ostukorvi lisatud!");
      ostukorvFailist.push({
        "nimi": "Kinkekaart: " + emailRef.current.value, 
        "hind": summa * kogus, 
        "aktiivne": true, 
        "pilt": ""
      });
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

      <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => muudaKogus(kogus + 1)}>+</button>

      <br /><br />

      Kinkekaartide kogusumma: <span>{summa * kogus}</span>

      <br /><br />

      <div>{sonum}</div>
      <label>E-mail</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={sisesta}>Sisesta kinkekaart ostukorvi</button> <br />
    </div>
  )
}

export default Kinkekaart