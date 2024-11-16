import React from 'react'
import { useParams } from 'react-router-dom' // URLga seotud asjad tulevad react-router-dom'st
import tootedFailist from "../../data/tooted.json";

function YksToode() {
  // loogeliste sulgude sisse läheb see, mis on selle faili URLs kooloni taga
  const {toodeIndex} = useParams(); // 
  // --> useParams võimaldab lugeda URLst parameetrit, mis on kooloni taga

  // Kuidas saada aru, mis loogeliste sulgude sisse panna?
  // 1. lähen App.js faili
  // 2. Otsin selle failiga seotud URLi üles
  // 3. vaatan mis on kooloni taga

  // indexiga saab elemendi arrayst üles otsida:
  // array[index] --> see väljastab õige elemendi, kellel on selline index
  //const leitud = ["Nobe", "Saab", "Ford"][0];
  const leitud = tootedFailist[toodeIndex];

  return (
    <div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
      <div>{leitud.nimi}</div>
      <div>{leitud.hind}€</div>
      <img src={leitud.pilt} alt="" />
    </div>
  )
}

export default YksToode