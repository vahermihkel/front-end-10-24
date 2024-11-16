import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from "../../data/esindused.json"

function MuudaEsindus() {
  const {esinduse_index} = useParams();
  const leitud = esindusedFailist[esinduse_index];

  return (
    <div>
      <input type="text" defaultValue={leitud.nimi} />
      <input type="text" defaultValue={leitud.tel} />
      <input type="text" defaultValue={leitud.aadress} />
    </div>
  )
}

export default MuudaEsindus