import React from 'react'
import  logo from '../Resources/logo.jpg';
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <nav className='footer__container'>
      <div className="footer__container__logo">
        <p>&copy; All rights reserved 2021</p>
      </div>
      <div className="footer__container__links">
        <ul>
          <li><a href="/"><FaTwitter/></a></li>
          <li><a href="/"><FaInstagram/></a></li>
          <li><a href="/"><FaFacebook/></a></li>
        </ul>
      </div>
      
    </nav>
  )
}

export default Footer
