import React from 'react'
import heroContactUs from '../Resources/heroContactUs.jpg'

//Components
import Footer from './Footer'

function ContactUs() {
  return (
    <div className='contact-us__container' style={{
      backgroundImage: `url(${heroContactUs})`,
      backgroundSize: "cover",
    }}>
      <div className='contact-us__gradient gradient--dark'>
        <div className="contact-us__form__container">
          <h1 className='contact-us__form__header'>Contact Us</h1>
         
          <form className="contact-us__form">
          <input className="contact-us__form__content" type="text" name="name" id="name" placeholder='Full Name'/>

          <input className="contact-us__form__content" type="email" name="email" id="email" placeholder='Email'/>

          <select className="contact-us__form__content">
            <option id='disabled' selected value="null" disabled>Subject of Interest</option>
            <option value="math">Math</option>
            <option value="physics">Physics</option>
            <option value="chemistry">Chemistry</option>
            <option value="spanish">Spanish</option>
          </select>

          <textarea className="contact-us__form__content" name="question" id="question" placeholder='Ask any additional information'></textarea>
          </form>



        </div>
        <section className="contact-us__text">
          <h2 className='contact-us__text__sub-header'>Step up your game</h2>
          <h2 className='contact-us__text__sub-header'>Join us today!</h2>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
