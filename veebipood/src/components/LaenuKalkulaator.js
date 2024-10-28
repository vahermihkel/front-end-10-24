import React, { useRef, useState } from 'react'

// KOJU: 

// Inputis:
// 1. Ostuhind  --> useRef
// 2. Sissemakse --> useRef
//    ostuhindRef - sissemakseRef
// HTML: <div>{laenusumma}</div>   --> useState   [laenusumma, muudaLaenusumma]
// 3. Periood --> useRef
// 4. Marginaal --> useRef
// 5. Euribor --> useRef
//   marginaalRef + euriborRef
// HTML: <div>{intress}</div>   --> useState   [intress, muudaIntress]

//  (ostuhindRef.current.value - sisseMakseRef.current.value) / (perioodRef.current.value * 12) * 
//    (marginaarRef.current.value * euriborRef.current.value / 12)
// HTML: <div>{kuumakse}</div>   --> useState   [kuumakse, muudaKuumakse]


function LaenuKalkulaator() {
  const nr1Ref = useRef();
  const nr2Ref = useRef();
  //    HTMLi , klikiga käivitub
  const [summa, muudaSumma] = useState(0);

  // function arvutaKokku() {

  // }

  const liidaKokku = () => {
    muudaSumma(Number(nr1Ref.current.value) + Number(nr2Ref.current.value))
  }

  const korrutaKokku = () => {
    muudaSumma(nr1Ref.current.value * nr2Ref.current.value)
  }

  return (
    <div>
      <input ref={nr1Ref} type="number" />
      <input ref={nr2Ref} type="number" />
      <button onClick={liidaKokku}>Liida kokku</button>
      <button onClick={korrutaKokku}>Korruta kokku</button>
      <div>{summa}€</div>
    </div>
  )
}

export default LaenuKalkulaator