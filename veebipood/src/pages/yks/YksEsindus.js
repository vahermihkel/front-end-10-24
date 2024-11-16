import React from 'react'
import esindusedFailist from "../../data/esindused.json";
import { useParams } from 'react-router-dom';

function YksEsindus() {
  const {index} = useParams();
  const leitud = esindusedFailist[index];

  return (
    <div>
      <div>Esinduse nimi: {leitud.nimi}</div>
      <div>Esinduse telefon: {leitud.tel}</div>
      <div>Esinduse aadress: {leitud.aadress}</div>
    </div>
  )
}

export default YksEsindus