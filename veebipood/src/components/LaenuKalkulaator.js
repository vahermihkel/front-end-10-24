import React, {useRef, useState} from 'react'
 
// kodus:
// inputis:
// 1. ostuhind useRef
// 2. sissemakse useRef
//    ostuhindRef - sissemakseRef
//  HTML: <div>{laenusumma}</div> useState [laenusumma, muudaLaenusumma]
// 3. periood useRef
// 4. marginaal useRef
// 5. euribor useRef
//    marginaalRef + euriborRef
// HTML: <div>{intress}</div> useState [intress, muudaIntress]
 
// valem: (ostuhindRef.current.value - sissemakseRef.current.value) / (perioodRef.current.value * 12) *
// (marginaalRef.current.value * euriborRef.current.value / 12)
// See tuleb kuumakse sisse
//HTML: <div>{Kuumakse}</div> useState [kuumakse, muudaKuumakse]
 
 
 
function LaenuKalkulaator() {
  const nr1Ref = useRef();
  const nr2Ref = useRef();
  // esimene läheb HTMLi, teine käivitub klikiga
  const [summa, muudaSumma] = useState(0);
 
  const liidaKokku = () => {
    muudaSumma(Number(nr1Ref.current.value) + Number(nr2Ref.current.value))
  }
 
  const korrutaKokku = () => {
    muudaSumma(nr1Ref.current.value * nr2Ref.current.value)
  }
 
 
  const ostuhindRef = useRef();
  const sissemakseRef = useRef();
  const perioodRef = useRef();
  const marginaalRef = useRef();
  const euriborRef = useRef();
 
 
  const [kuumakse, muudaKuumakse] = useState(0);
  const [intress, muudaIntress] = useState(4.8);
  const [laenusumma, muudaLaenusumma] = useState(75000);
 
  const intresskokku = () => {
    muudaIntress(Number(marginaalRef.current.value) + Number(euriborRef.current.value));
    kuumaksekokku();
  }

  const laenusummakokku = () => {
    muudaLaenusumma(ostuhindRef.current.value - sissemakseRef.current.value);
    kuumaksekokku();
  }

  const kuumaksekokku = () => {
    const laen = ostuhindRef.current.value - sissemakseRef.current.value;
    const pikkusKuudes = perioodRef.current.value * 12;
    const laenuIntress = Number(marginaalRef.current.value) + Number(euriborRef.current.value) / 12;

    muudaKuumakse(laen / pikkusKuudes * laenuIntress);
  }
 
 
  // liitmise puhul tuleb lisada sõna "Number" 
  // sulgude ette, sest sõnu saab ka liita
 
  return (
    <div>
      <input ref={nr1Ref} type="number"></input>
      <input ref={nr2Ref} type="number"></input>
      <button onClick={liidaKokku}>Liida kokku</button>
      <button onClick={korrutaKokku}>Korruta kokku</button>
      <div>{summa}€</div>
 
      <br></br>
      <br></br>
 
      <label>Ostuhind: </label>
      <input onChange={laenusummakokku} defaultValue={75000} ref={ostuhindRef} type="number"></input> <br></br>
      <label>Sissemakse: </label>
      <input onChange={laenusummakokku} defaultValue={0} ref={sissemakseRef} type="number"></input> <br></br>
      {/* <button onClick={laenusummakokku}>Arvuta laenusumma</button> */}
      <div>Laenusumma kokku (€): {laenusumma.toFixed(2)}</div>

      <label>Periood: </label>
      <input onChange={kuumaksekokku} defaultValue={30} ref={perioodRef} type="number"></input> <br></br>
      <label>Marginaal: </label>
      <input onChange={intresskokku} defaultValue={1.7} ref={marginaalRef} type="number"></input> <br></br>
      <label>Euribor: </label>
      <input onChange={intresskokku} defaultValue={3.1} ref={euriborRef} type="number"></input> <br></br>
      <div>Intress kokku: {intress.toFixed(1)}</div>
 
      <br></br>
      {/* <button onClick={kuumaksekokku}>Arvuta kokku</button> */}
      {kuumakse > 0 && <div>{kuumakse.toFixed(2)}</div>}
      {kuumakse <= 0 && <div>Kuumakse ei saa olla negatiivne arv</div>}
      {/* <div>{laenusumma}</div> */}
      {/* <div>{intress}</div> */}
 
    </div>
  )
}
 
export default LaenuKalkulaator