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