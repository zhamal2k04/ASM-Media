import React from 'react'
import "./MyNavbar.css"
import nav_logo from "../../Assets/Images/footer-logo.jpg"
import telegram from "../../Assets/Images/telegram.png"
import instagram from "../../Assets/Images/instagram.png"
import cell from "../../Assets/Images/cell.png"
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div class="nav-container">
      <Link>
        <img src={nav_logo} alt="/" />
      </Link>
      <div class="section">
        <ol>
          <li>
            <img src={telegram}alt="/" />
            <p>@m_azizaas</p>
          </li>
          <li>
            <img src={instagram} alt="/" />
            <p>@m_azizaas</p>
          </li>
          <li>
            <img src={cell} alt="/" />
            <p>+998 123 456789</p>
          </li>
        </ol>

        <ul>
          <Link to={'/home'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/portfolio'}>Portfolio</Link>
          <Link to={'/contacts'}>Contacts</Link>
        </ul>
      </div>
    </div>
  )
}

export default MyNavbar