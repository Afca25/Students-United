import React from 'react'
import  logo from '../Resources/logo.jpg';

function Navbar() {
  return (
    <nav className='navbar__container'>
      <div className="navbar__container__logo">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="navbar__container__links">
        <ul>
          <li><a href="/">Courses</a></li>
          <li><a href="/">Faculties</a></li>
          <li><a href="/">About Us</a></li>
        </ul>
        <div className="navbar__container__button">
          <button className="btn secondary">Contact Us</button>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar
