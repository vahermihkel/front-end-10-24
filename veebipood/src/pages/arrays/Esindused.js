import React, {useState} from 'react'
import Esindus from '../../components/Esindus'
import esindusedFailist from "../../data/esindused.json"
import { Link } from 'react-router-dom';

// loogeliste sulgude vahel on JavaScript --> muutujad

// 'something' is not defined. --> muutuja on loomata või importimata 

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");
  const [esindused, muudaEsindused] = useState(esindusedFailist.slice());

  const sorteeriAZ = () => {
    //esindused.sort();
    esindused.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
    muudaEsindused(esindused.slice());
  }

  const sorteeriZA = () => {
    esindused.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
    muudaEsindused(esindused.slice());
  }

  const sorteeriTahemargidKasv = () => {
    esindused.sort((a,b) => a.nimi.length - b.nimi.length);
    muudaEsindused(esindused.slice());
  }

  const sorteeriTahemargidKah = () => {
    esindused.sort((a,b) => b.nimi.length - a.nimi.length);
    muudaEsindused(esindused.slice());
  }
                                            // 012345678     01234567
  const sorteeriKolmasTahtAZ = () => {      // Kristiine     Ülemiste
    esindused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2], "et"));
    muudaEsindused(esindused.slice());
  }

  const filtreeriEgaLoppevad = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.endsWith("e"));
    muudaEsindused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.length >= 7);
    muudaEsindused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.length === 9);
    muudaEsindused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = esindusedFailist.filter(esindus => esindus.nimi.includes("is"));
    muudaEsindused(vastus);
  }
                                          // 012345678     01234567
  const filtreeriNeljasTahtS = () => {    // Kristiine     Ülemiste
    const vastus = esindusedFailist.filter(esindus => esindus.nimi[3] === "s");
    muudaEsindused(vastus);
  }

  const reset = () => {
    muudaEsindused(esindusedFailist.slice());
  }

  return (
    <div>
      <div> {linn} </div>
      <button className={linn === "Tallinn" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne": ""} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
        <div>
          <button onClick={reset}>Reset</button>
          <br /><br />
          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriTahemargidKasv}>Sorteeri tähemärkide arv kasvavalt</button>
          <button onClick={sorteeriTahemargidKah}>Sorteeri tähemärkide arv kahanevalt</button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
          <br /><br />
          <button onClick={filtreeriEgaLoppevad}>Filtreeri 'e'ga lõppevad</button>
          <button onClick={filtreeriVah7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
          <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
          <button onClick={filtreeriIsSisaldavad}>Filtreeri 'is' lühendit sisaldavad</button>
          <button onClick={filtreeriNeljasTahtS}>Filtreeri neljas täht 's'</button>
          <br /><br />
          {esindused.map((esindus, index) => 
            	<div key={index}>
                {esindus.nimi}
                <Link to={"/esindus/" + index}>
                  <button>Vt lähemalt</button>
                </Link>
              </div>)}
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> */}
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