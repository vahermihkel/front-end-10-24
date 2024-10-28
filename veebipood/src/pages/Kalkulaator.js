import React, { useState } from 'react'
import StandardKalkulaator from '../components/StandardKalkulaator';
import LaenuKalkulaator from '../components/LaenuKalkulaator';
import MaksimaalneKalkulaator from '../components/MaksimaalneKalkulaator';

function Kalkulaator() {
  const [vaade, muudaVaade] = useState("standard");
  
  // const sisestusRef = useRef();
  // const [hind, muudaHind] = useState(1000);

  // function arvuta() {
  //   muudaHind(sisestusRef.current.value);
  // }

  return (
    <div>
      <div>{vaade}</div>
      <button className={vaade === "standard" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("standard")}>Standard kalkulaator</button>
      <button className={vaade === "laenu" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("laenu")}>Laenukalkulaator</button>
      <button className={vaade === "maksimaalne" ? "vaade-aktiivne" : "vaade"} onClick={() => muudaVaade("maksimaalne")}>Maksimaalne limiit</button>

      {vaade === "standard" && <StandardKalkulaator /> }

      {vaade === "laenu" && <LaenuKalkulaator />
        // <div>
        //   <input ref={sisestusRef} type="text" />
        //   <button onClick={arvuta}>Arvuta</button>
        //   Kuumakse: {hind * 3.65 / 12}
        // </div>
      }

      {vaade === "maksimaalne" && <MaksimaalneKalkulaator />}
    </div>
  )
}

export default Kalkulaator