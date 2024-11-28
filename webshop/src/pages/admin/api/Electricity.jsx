import React, { useEffect, useState } from 'react'
 
// https://dashboard.elering.ee/api/nps/price
// RASKE - loogeline sulg

// .map is not a function
// juhul kui ei tee seda array'le
 
function Electricity() {
  const [electricity, setElectricity] = useState([]);
 
useEffect(() => {
  fetch("https://dashboard.elering.ee/api/nps/price")
  .then(res=>res.json())
  .then(json=>setElectricity(json.data.ee))
                        //    {}.
}, []);
 
  return (
    <div>
      {new Date().toUTCString()}
      <br></br>
<table>
  <thead>
    <tr>
      <th>1. jaanuar 1970 millisekundit kulunud</th>
      <th>Kuupäev UTC formaadis</th>
      <th>Hind</th>
    </tr>
  </thead>
  <tbody>
      {electricity.map(item => 
        <tr>
          <td>{item.timestamp}</td>
          <td>{new Date(item.timestamp * 1000).toUTCString()}</td>
          <td>{item.price} €</td>
 
 
        </tr>
      )}
  </tbody>
</table>
    </div>
  )
}
 
export default Electricity