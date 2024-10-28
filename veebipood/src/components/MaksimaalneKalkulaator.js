import React, { useRef, useState } from 'react'

function MaksimaalneKalkulaator() {
  const peetavateRef = useRef();
  const sissetulekuRef = useRef();
  const kuludeRef = useRef();
  const [maksimaalne, muudaMaksimaalne] = useState(0);

  const arvutaKokku = () => {
    muudaMaksimaalne(
      300/(peetavateRef.current.value+1)*(sissetulekuRef.current.value-kuludeRef.current.value)
    );
  }

  return (
    <div>
      <label>Ülalpeetavate arv</label>
      <input ref={peetavateRef} type="number" /> <br />
      <label>Netosissetulek</label>
      <input ref={sissetulekuRef} type="number" /> <br />
      <label>Igakuised kohustused</label>
      <input ref={kuludeRef} type="number" /> <br />
      <button onClick={arvutaKokku}>Arvuta kokku</button>
      <div>{maksimaalne.toFixed(0)} €</div>
    </div>
  )
}

export default MaksimaalneKalkulaator