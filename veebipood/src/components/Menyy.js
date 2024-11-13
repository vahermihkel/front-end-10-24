import React from 'react'
import { Link } from 'react-router-dom'

function Menyy() {
  return (
    <div>

      <Link to="/">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_1-1344x896.jpg" alt="" />
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

      <br /><br />

      <Link to="/esindused">
       <button className="nupp">Meie esindused</button>
      </Link>

      <Link to="/hinnad">
       <button className="nupp">Hinnad</button>
      </Link>

      <Link to="/tootajad">
       <button className="nupp">Töötajad</button>
      </Link>

      <Link to="/tooted">
       <button className="nupp">Tooted</button>
      </Link>

      <Link to="/autod">
       <button className="nupp">Autod</button>
      </Link>

      <Link to="/kasutajad">
       <button className="nupp">Kasutajad</button>
      </Link>

      <br /><br />

      <Link to="/halda-esindused">
       <button className="nupp">Halda esindused</button>
      </Link>

      <Link to="/halda-hinnad">
       <button className="nupp">Halda hinnad</button>
      </Link>

      <Link to="/halda-tootajad">
       <button className="nupp">Halda töötajad</button>
      </Link>

      <Link to="/halda-tooted">
       <button className="nupp">Halda tooted</button>
      </Link>

      <Link to="/halda-autod">
       <button className="nupp">Halda autod</button>
      </Link>

      <Link to="/halda-kasutajad">
       <button className="nupp">Halda kasutajad</button>
      </Link>

    </div>
  )
}

export default Menyy