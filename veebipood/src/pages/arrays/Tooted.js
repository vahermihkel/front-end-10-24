import React, { useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { Link } from "react-router-dom"
import ostukorvFailist from "../../data/ostukorv.json"
import { ToastContainer, toast } from 'react-toastify';
import { Button, TextField } from '@mui/material';
 
function Tooted() { 
      const [tooted, muudaTooted] = useState(tootedJSON.slice())
      const otsingRef = useRef();

      const otsi = ( ) => {
        const vastus = tootedJSON.filter(toode => toode.nimi.toLocaleLowerCase().includes(otsingRef.current.value.toLocaleLowerCase()) );
        muudaTooted(vastus);
      }

      const arvutaKokku = ( ) => {
        let summa = 0;
        tooted.forEach(toode => summa = summa + toode.nimi.length)
        return summa;
      }

      const sorteeriAZ = ( ) => {
        tooted.sort((a, b) => a.nimi.localeCompare(b.nimi, "et"));
        muudaTooted(tooted.slice());
      }

      const sorteeriZA = ( ) => {
          tooted.sort((a, b) => b.nimi.localeCompare(a.nimi, "et"));
          muudaTooted(tooted.slice());
      }

      const sorteeriTahemargidKasv = ( ) => {
          tooted.sort((a, b) =>  a.nimi.length - b.nimi.length);
          muudaTooted(tooted.slice());
      }

      const sorteeriTahemargidKah = ( ) => {
          tooted.sort((a, b) => b.nimi.length - a.nimi.length);
          muudaTooted(tooted.slice());
      }

      const tühjenda = ( ) => { 
        muudaTooted(tootedJSON.slice())
      }

      const FiltreeriBgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.nimi.startsWith("B"));
        muudaTooted(vastus);
      }
 
      const FiltreeriNgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.nimi.startsWith("N"));
        muudaTooted(vastus);
      }
 
      const FiltreeriTgaAlg = ( ) => {
        const vastus = tooted.filter(toode => toode.nimi.startsWith("T"));
        muudaTooted(vastus);
      }

      function lisaOstukorvi(toode) {
        ostukorvFailist.push(toode);
        toast.success("Toode edukalt ostukorvi lisatud!");
      }
 
  return (
    <div>
      <br />
      <TextField label="Otsi" onChange={otsi} inputRef={otsingRef} type="text" />
      <div>Tähed kokku: {arvutaKokku()}</div>

      <span>Sorteeri: </span>
      <Button onClick={sorteeriAZ}>Sorteeri A-Z</Button>
      <Button onClick={sorteeriZA}>Sorteeri Z-A</Button>
      <Button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</Button>
      <Button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</Button><br /><br />
      <br />
      <span>Filtreeri: </span>
      <Button onClick={FiltreeriBgaAlg}>B tähega algavad</Button>
      <Button onClick={FiltreeriNgaAlg}>N tähega algavad</Button>
      <Button onClick={FiltreeriTgaAlg}>T tähega algavad</Button>
 
      <br />
      <Button onClick={tühjenda}>Tühjenda filtrid</Button>
      
      {tooted.map((toode, index) =>  
        <div key={index} >
          <img className="toote-pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          {/* {toode.aktiivne && <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi 1</button>} */}
          
          <Button variant="contained" disabled={toode.aktiivne === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</Button>

          <Link to={"/toode/" + index}>
                <Button variant="outlined">Vt lähemalt</Button>
          </Link>
        </div> )}

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
      />
    </div>
  )
}
 
export default Tooted