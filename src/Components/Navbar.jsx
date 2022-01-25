import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import  logo from '../Resources/logo.jpg';

function Navbar() {
  let navigate = useNavigate()

  return (
      <nav className='navbar__container'>
        <div className="navbar__container__logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar__container__links">
          <ul>
            <li><Link to="/top-courses">Top Courses</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
          </ul>
          <div className="navbar__container__button">
            <button
             className="btn secondary"
             onClick={() => {
               navigate("/contact-us")
             }}
             >Contact Us</button>
          </div>
        </div>
        
      </nav>
  )
}

export default Navbar
