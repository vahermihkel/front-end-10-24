import React, { useState } from 'react'
import hinnadFailist from "../../data/hinnad.json";
// ./ --> samas kaustas
// ../ --> kausta võrra ülevalpool
// ../../ --> 2 kausta ülevalpool
// kui ei ole ühtegi punkti ees, siis võetakse node_modules seest

// teeme väljatõste andmete osas:
// 1. lühem -> muidu on liiga pikad read
// 2. saan taaskasutada -> kui muudan ühe korra, siis muutub kõikjal

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadFailist.slice());

  const reset = () => {
    muudaHinnad(hinnadFailist.slice());
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a.number - b.number);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b.number - a.number);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort((a, b) => a.number.toString().localeCompare(b.number.toString()));
    muudaHinnad(hinnad.slice());
    // .slice() on vaja kui muudan array'd ja tahan et see muutus ka HTMLs kajastuks
    // .slice() teeb koopia, võtab mälukoha ära, et React ei näeks seda samasugune kui originaal
  }

  const filtreeriVaiksemKui50 = () => {
// kui on vaja siia panna uus muutuja millele võrdusmärgiga väärtus anda: .slice() pole vaja
    const vastus = hinnadFailist.filter(hind => hind.number < 50);
    muudaHinnad(vastus);
  }

  const filtreeriSuuremKui100 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number > 100);
    muudaHinnad(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;
    // summa = summa + 45; // 45
    // summa = summa + 9; // 45 + 9
    // summa = summa + 80; // 54 + 80

//[45, 9, 80]
//                  45  =>   45  =  0    + 45
//                   9  =>   54  =  45   + 9
//                  80  =>  134  =  54   + 80
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;
  }

  // const -> konstantne, teda ei saa enam võrdusmärgiga muuta
  // let -> muutmine on lubatud
  // var -> Reactis ei kasutata

  return (
    <div>
      <div>Hinnad kokku: {arvutaKokku()}</div>

      <button onClick={reset}>Kustuta filtrid</button>
      <br /><br />

      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <br /><br />
      <button onClick={filtreeriVaiksemKui50}>Filtreeri väiksemad kui 50</button>
      <button onClick={filtreeriSuuremKui100}>Filtreeri suuremad kui 100</button>

      {hinnad.map((hind, index) => <div key={index}>{hind.number}</div>)}
    </div>
  )
}

export default Hinnad