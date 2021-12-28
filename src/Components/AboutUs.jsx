import React from 'react'
import heroAboutUs from '../Resources/heroAboutUs.jpg'
import { IconContext } from "react-icons";
import { FaBook, FaGlobe, FaLaptop  } from "react-icons/fa";

function AboutUs() {
  return (
    <div className='about-us__container' style={{
      backgroundImage: `url(${heroAboutUs})`,
      backgroundSize: "cover",
      backgroundPosition: "top center",
    }}>
      <div className="about-us__gradient gradient">
        <section className="about-us__text-content">
          <h1 className="about-us__header">About Us</h1>
          <h2 className='about-us__sub-header'>
            We are one of the most diverse 
          <br />
          and successful online learning communities 
          <br />
          with over 50,000 students all around the world, <br />
          powered with an incredible group of teachers 
          <br />
          and specialists for you
          </h2>
        </section>
        <IconContext.Provider value={{style: { fontSize: '40px', color: '#fbaf00'}}}>
        <section className="about-us__panel__container">

          <div className="about-us__panel__content">
            <FaBook className='icon' />
            <p>Private Tutoring</p>
            <p>Random Text Here</p>
            <a href="/" className='link'>Learn More</a>
          </div>

          <div className="about-us__panel__content">
            <FaGlobe className='icon' />
            <p>Online Education</p>
            <p>Random Text Here</p>
            <a href="/" className='link'>Learn More</a>
          </div>

          <div className="about-us__panel__content">
            <FaLaptop className='icon' />
            <p>Growing Community</p>
            <p>Random Text Here</p>
            <a href="/" className='link'>Learn More</a>
          </div>

        </section>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default AboutUs
