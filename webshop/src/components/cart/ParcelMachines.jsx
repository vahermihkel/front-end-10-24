import React, { useEffect, useState } from 'react'

function ParcelMachines() {
  // miks on API päringutel siin tühi array --> API päring võtab aega
  // muidu oleks tühjus -> tühjus tekitab probleeme. 
  // tühjust tähistatakse "undefined" või "null"
  const [pms, setPms] = useState([]);

  useEffect(() => {
    // siin täidetakse muutuja, mis on senikaua kuni võetakse tühi array (mitte tühjus)
    fetch("https://www.omniva.ee/locations.json") // aadress, kuhu päringu teeme
      .then(res => res.json()) // kogu tagastus, mille sees on igasugused metaandmed
      .then(json => setPms(json)); // siin ütleme mida nende andmetega teeme, mille saame
  }, []); // millisel juhul on vaja siia punkti panna?
  // 1. kui on [] kandilisest kandilise suluni, siis punkti pole vaja panna
  // 2. kui on {} loogelisest sulust loogelise suluni, siis pean otsima, millis(t)e võtme(te)
  //      abil jõuan [] arrayni

  return (
    <div>
      
      <select>
        {/* <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option> */}
        {pms
          .filter(pm => pm.A0_NAME === "EE")
          .map(pm => <option key={pm.NAME}>{pm.NAME}</option>)}
      </select>
    </div>
  )
}

export default ParcelMachines