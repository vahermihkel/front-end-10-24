import React, { useRef, useState } from 'react'

function Seaded() {
  // vasak poolne sisaldab enda sees keelt
  // parempoolne võimaldab keelt muuta
  const [keel, muudaKeel] = useState("est");
                                  // algväärtus

  //'muudaKeel' is assigned but never used.
  // see tähendab, et kuskil ei muudeta muutujat -> {keel}

  //'keel' is assigned but never used.
  // muutujat muudetakse koguaeg, aga muutujat ei kasutata

  // kui HTML element on loogeliste sulgude sees ja tema ees on &&, siis
  //    seal peab olema tõde või väära väljastav võrdus. kui on tõde, siis näidatakse elementi
  //      vähemalt üks peab võrduses olema muutuvas seisundis, 
  //      siis ta vahepeal on tõde ja vahepeal mitte

  // alati kui on HTMLs dünaamika, kasutan loogelist sulgu

  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();
  const [aadress, muudaAadress] = useState();
  const [email, muudaEmail] = useState();
  const [telefon, muudaTelefon] = useState();

  return (
    <div>
      <div>{keel}</div>
      <button className={keel === "est" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button className={keel === "eng" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("eng")}>To English</button>
      <button className={keel === "rus" ? "keel-aktiivne" : "keel"} onClick={() => muudaKeel("rus")}>Pycckuj</button>

      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на pyccкoм языке</div>}


      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={() => muudaAadress(aadressRef.current.value)}>Sisesta</button>
      <br /><br />

      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={() => muudaEmail(emailRef.current.value)}>Sisesta</button>
      <br /><br />

      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={() => muudaTelefon(telefonRef.current.value)}>Sisesta</button>
      <br /><br />

      <div>Aadress: {aadress}</div>
      <div>Email: {email}</div>
      <div>Telefon: {telefon}</div>
    </div>
  )
}

export default Seaded