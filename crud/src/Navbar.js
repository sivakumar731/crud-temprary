import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/delete" className="navbar-brand" >Home</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to='/create1' className="nav-link active" aria-current="page" >Create</Link>
        </li>
        <li className="nav-item">
          <Link to='/read' className="nav-link" >Read</Link>
        </li>
        <li className="nav-item">
          <Link to='/update' className="nav-link" >Update</Link>
        </li>
        <li className="nav-item">
          <Link to='/delete' className="nav-link " >Delete</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar