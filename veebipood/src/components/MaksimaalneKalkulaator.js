import React, { useRef, useState } from 'react'

function MaksimaalneKalkulaator() {
  const peetavateRef = useRef();
  const sissetulekuRef = useRef();
  const kuludeRef = useRef();
  const [maksimaalne, muudaMaksimaalne] = useState(24545);

  const arvutaKokku = () => {
    muudaMaksimaalne(
      300/(peetavateRef.current.value+1)*(sissetulekuRef.current.value-kuludeRef.current.value)
    );
  }

  return (
    <div>
      <label>Ülalpeetavate arv</label>
      <input onChange={arvutaKokku} defaultValue="1" ref={peetavateRef} type="number" /> <br />
      <label>Netosissetulek</label>
      <input onChange={arvutaKokku} defaultValue="900" ref={sissetulekuRef} type="number" /> <br />
      <label>Igakuised kohustused</label>
      <input onChange={arvutaKokku} defaultValue="0" ref={kuludeRef} type="number" /> <br />
      {/* <button onClick={arvutaKokku}>Arvuta kokku</button> */}
      <div>{maksimaalne.toFixed(0)} €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator