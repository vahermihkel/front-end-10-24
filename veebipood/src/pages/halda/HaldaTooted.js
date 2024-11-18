import React, { useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"; 
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
// suure tähega HTML, väiksega JS

function HaldaTooted() {
  const [tooted, muudaTooted] = useState(tootedJSON.slice());
  const toodeRef = useRef(); // tegema kokku 4 refi
 
function lisaToode() {
  tootedJSON.push(toodeRef.current.value); // peab lisama kõik 4 omadust, objektina
  muudaTooted(tootedJSON.slice());
  toodeRef.current.value = "";
  toast.success("Toode edukalt lisatud!");
}
 
function kustuta(index) {
  tootedJSON.splice(index, 1);
  muudaTooted(tooted.slice());
  toast.error("Toode edukalt kustutatud!");
}
 
  return (
    <div>
      <br></br>
      {/* 4 labelit ja 4 inputi kokku -> iga omaduse osas */}
      <label>Toode: </label>
      <input ref={toodeRef}></input> <br></br>
      <button onClick={lisaToode}>Lisa</button>
 
    <br></br>
    <br></br>
 
    <table>
      <thead>
        <tr>
          <th>Toode</th>
          <th>Hind</th>
          <th>Pilt</th>
          {/* <th>Aktiivne</th> */}
          <th>Kustuta</th>
          <th>Muuda</th>
        </tr>
      </thead>
      <tbody>
      {tooted.map((toode, index) => 
      <tr key={index} className={toode.aktiivne ? "aktiivne" : "mitteaktiivne"}>
        <td>{toode.nimi}</td>
        <td>{toode.hind}</td>
        <td>{toode.pilt}</td>
        {/* <td>{toode.aktiivne}</td> */}
        <td><button onClick={() => kustuta(index)}>x</button></td>
        <td>
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button>
          </Link>
        </td>
      </tr>)}
      </tbody>
      </table>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}
 
export default HaldaTooted