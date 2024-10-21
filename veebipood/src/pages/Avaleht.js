import React, { useState } from 'react'

// string - sõna. 
// number: saan teda kokku liita/korrutada/jagada/lahutada
// boolean - kahendväärtus: saan teda tagurpidi keerata
    // laigitud, makstud, registreerunud, sisseloginud, täisealine, 

// kui on jutumärgid --> võin väärtuseks anda ükskõik mille
// ilma jutumärkideta --> võin väärtuseks anda kas numbreid või true/false

function Avaleht() {
  const [laigitud, muudaLaigitud] = useState(true);

  return (
    <div>
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <br />
      {/* 1. variant - kahe nupuga: */}
      <button onClick={() => muudaLaigitud(true)}>Pane like peale</button>
      <button onClick={() => muudaLaigitud(false)}>Võta like maha</button>
      <br />
      {/* 2. variant - ühe nupuga: */}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like'i</button>
    </div>
  )
}

export default Avaleht

// E 21.10   13.30
// K 23.10   9.00-12.15
// E 28.10   13.30
// K 30.10   13.30
// E 04.11   13.30
// K 06.11   9.00
// T 12.11   13.30
// N 14.11   13.30