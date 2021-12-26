import React from 'react'

function Navbar() {
  return (
    <nav className='navbar__container'>
      <div className="navbar__container__logo">
        <img src="../Resources/logo_white_large.png" alt="logo" />
        {/* width: 150px;
height: 39.9px; */}
      </div>
      <div className="navbar__container__links">
        <ul>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Faculties</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="navbar__container__button">
        <button className="btn secondary">Contact Us</button>
      </div>
      
    </nav>
  )
}

export default Navbar
