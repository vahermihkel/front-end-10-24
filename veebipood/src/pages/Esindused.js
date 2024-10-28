import React, {useState} from 'react'
import Esindus from '../components/Esindus'

// loogeliste sulgude vahel on JavaScript --> muutujad

// 'something' is not defined. --> muutuja on loomata või importimata 

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");

  return (
    <div>
      <div> {linn} </div>
      <button className={linn === "Tallinn" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
        <div>
          <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div>
        </div>
      }

      {linn === "Tartu" && 
        <div>
          <div>Lõunakeskus</div>
          <div>Raatuse</div>
        </div>
      }

      {linn === "Narva" && <div>Fama keskus</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}

      <br /><br /><br /><br /><br /><br /><br />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
      <Esindus />
    </div>
  )
}

export default Esindused