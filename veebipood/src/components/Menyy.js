import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>

      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_1-1344x896.jpg" alt="" />
      </Link>

      <Link to="/esindused">
       <button className="nupp">Meie esindused</button>
      </Link>

      <Link to="/osta-kinkekaart">
       <button className="nupp">Mine kinkekaarti ostma</button>
      </Link>

      <Link to="/ostukorv">
       <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
       <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
       <button className="nupp">Seaded</button>
      </Link>

      <Link to="/kalkulaator">
       <button className="nupp">Kalkulaator</button>
      </Link>
    </div>
  )
}

export default Menyy