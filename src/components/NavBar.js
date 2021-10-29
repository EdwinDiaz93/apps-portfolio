import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/navbar.scss"
export const NavBar = () => {
    return (
        <nav className="navbar">
          <ul className="list-group">            
            <li className="list-item">
              <Link className="list-link" to="/citas">Administrador de Citas</Link>
            </li>
            <li className="list-item">
              <Link className="list-link" to="/frases">Frases de breaking bad</Link>
            </li>

            <li className="list-item">
              <Link className="list-link" to="/letras">Buscador de letras</Link>
            </li>
          </ul>
        </nav>
    )
}
