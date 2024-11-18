import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json";

function MuudaToode() {
  const { toote_index } = useParams();
  const leitud = tootedFailist[toote_index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const piltRef = useRef();
  const aktiivneRef = useRef();

  function muuda() { // kõik ref.current.value kohad on by default sõna
    tootedFailist[toote_index] = {
      "nimi": nimiRef.current.value,
      "hind": Number(hindRef.current.value),
      "pilt": piltRef.current.value,
      "aktiivne": aktiivneRef.current.checked,
    };
  }

  // kõik kes pole sõna kujul (number või boolean), pean tegema midagi erilist:
  // numbri puhul .current.value osas Number() ümber ja 
  // checkboxi puhul .current.checked ja defaultChecked HTMLs

  return (
    <div>
      <label>Nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      <label>Hind</label> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind} /> <br />
      <label>Pilt</label> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt} /> <br />
      <label>Aktiivne</label> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /> <br />
      <Link to="/halda-tooted">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaToode