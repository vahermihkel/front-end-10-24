import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState(); // HTMLs dünaamika tekitamiseks
  const toodeRef = useRef();  // HTMLi inputi seest sisestuse lugemiseks

  function lisa() {
    // toodeRef.current.value === "" ? muudaSonum("Tühja nimega ei saa") : muuda("Lisatud")
    if (toodeRef.current.value === "") {
      muudaSonum("Tühja nimega ei saa toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + toodeRef.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Toote nimi</label> <br />
      <input ref={toodeRef} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode

// Kuhu tulevad vead:
// 1. kompileerimise vead --> punane joon all, localhostis punane tekst
// compile-time errors
// vea leiab ülesse sealt, kus rakenduse käima panin või ka lehelt saan lugeda (punane tekst)

// 2. käimasoleku vead --> ei tööta, mida ootan et töötaks / või leht on üleni valge
// run-time errors
// vea leiab ülesse: tehes lehel parem klõps -> inspect -> console