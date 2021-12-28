import React from 'react'
import heroHome from '../Resources/heroHome.jpg'

function Home() {
  return (
    <div className='home__container' style={{
      backgroundImage: `url(${heroHome})`,
      backgroundSize: "cover",
    }}>
      <div className="home__gradient gradient">
        <section className="home__text-content">
          <h1 className="home__header">Students United</h1>
          <h2 className='home__sub-header'>Passion for learning</h2>
        </section>
        <div className='home__btn' id='cta'>
          <button className="btn primary">Enroll    Now</ button>
        </div>
      </div>

    </div>
  )
}

export default Home
