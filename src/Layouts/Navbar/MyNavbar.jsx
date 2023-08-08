import React from 'react'
import "./MyNavbar.css"
import nav_logo from "../../Assets/Images/footer-logo.jpg"
import telegram from "../../Assets/Images/telegram.png"
import instagram from "../../Assets/Images/instagram.png"
import cell from "../../Assets/Images/cell.png"
import { Link } from 'react-router-dom'

const MyNavbar = () => {
  return (
    <div className='nav-container'>
        <div className="leftSection">
          <img src={nav_logo} alt="/" /> 
        </div>
        <div className="rightSection">
          <section className='social-links'>
                <div className="row">
                    <img src={telegram} alt="/" />
                    <p>@m_azizaas</p>
                </div>
                <div className="row">
                    <img src={instagram} alt="/" />
                    <p>@m_azizaas</p>
                </div>
                <div className="row">
                    <img src={cell} alt="/" />
                    <p>+998 12 3456789</p>
                </div>
                <div className="row">
                  <p>language •</p>
                </div>
          </section>
          <section className='nav-links'>
              <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/"}>About</Link>
                <Link to={"/"}>Portfolio</Link>
                <Link to={"/"}>Contacts</Link>
              </ul>
          </section>
        </div>
    </div>
  )
}

export default MyNavbar