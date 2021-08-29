import React from 'react'
import {Link} from 'react-router-dom'
import CartWidget from '../Cartwidget/CartWidget'
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../navigation/Navbar.css"

const navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg mb-5">
    <div className="container-fluid">
      <Link  className="Logotipe px-5"to="/">
        <img src="./logo.png" width="180" alt="LOGOTIPO"/>
      </Link>
      <Link className="navbar-brand" href="#"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">

          <li className="nav-item mr-1">
            <Link className="nav-link"  to='/'>INICIO</Link>
          </li>
            <NavDropdown title="PRODUCTOS" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Remeras UNISEX</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Trajes de Baño</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Kits-Complex</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item eventKey="4.4">Colchas-Decoración</NavDropdown.Item>
          </NavDropdown>

          {/* <li className="nav-item px-1">
            <Link className="nav-link" to='/Productos'>PRODUCTOS</Link>
          </li> */}
          <li className="nav-item px-1">
            <Link className="nav-link" to='/Ondemand'>ONDEMAND</Link>
          </li>
            <li className="nav-item px-1">
            <Link className="nav-link" to='/Inspirados'>INSPIRACION</Link>
          </li>
            <li className="nav-item px-1">
            <Link className="nav-link" to='/Nosotros'>NOSOTROS</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</Link>
          </li> */}
      </ul>
      <CartWidget/>
    </div>
  </div>
</nav>
    </div>
  )
}

export default navbar
