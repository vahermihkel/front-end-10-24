import React from 'react'
import { Link } from 'react-router-dom'

// kirjutamisel 2 varianti:
// 1. Emmet      div + enter --->   <div></div>
//             button + enter --->  <button></button>
// 2. Soovin importi     <Link     dropdownist --->   Link        react-router-dom
//                       <Page     dropdownist --->   Page        ./pages/Page

function Ostukorv() {
  return (
    <div>
      <div>Ostukorv on tühi</div>
      <Link to="/">
        Mine avalehele
      </Link>
    </div>
  )
}

export default Ostukorv