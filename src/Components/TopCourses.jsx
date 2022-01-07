import React from 'react'

import heroCourses from '../Resources/coursesModule.jpg'

function TopCourses() {
  return (
    <div className='top-courses__container'>
      {/* ===== MODULE ===== */}
      <section className="top-courses__module">

        {/* ===== MODULE IMAGE ===== */}
        <div 
          className="top-courses__module__img__container"
          style={{
           backgroundImage: `url(${heroCourses})`,
           backgroundSize: "cover",
          }}
        >
          HEY
        </div>
        <div className="top-courses__module__container">
           {/* ===== MODULE BUTTONS ===== */}
          <div className="top-courses__module__button-container">
            <button 
              className="top-courses__module__button-container__btn active"
              data-id='math'
            >
              Math
            </button>

            <button 
              className="top-courses__module__button-container__btn"
              data-id='physics'
              >
                Physics
            </button>

            <button 
              className="top-courses__module__button-container__btn"
              data-id='spanish'
            >
              Spanish
            </button>
          </div>

          {/* MODULE CONTENT */}
          {/* ===== MATH ===== */}
          <div className="top-courses__module__content active" id='math'>
            <div className="top-courses__module__content__title">
              <h2>Math</h2>
            </div>
            <div className="top-courses__module__content__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                MATH TAB
                Nam totam voluptatum autem eum incidunt, expedita laboriosam architecto repellat officiis at?
              </p>
            </div>
          </div>
          
          {/* ===== PHYSICS ===== */}
          <div className="top-courses__module__content" id='physics'>
            <div className="top-courses__module__content__title">
              <h2>Physics</h2>
            </div>
            <div className="top-courses__module__content__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                PHYSICS TAB
                Nam totam voluptatum autem eum incidunt, expedita laboriosam architecto repellat officiis at?
              </p>
            </div>
          </div>
          
          {/* ===== SPANISH ===== */}
          <div className="top-courses__module__content" id='spanish'>
            <div className="top-courses__module__content__title">
              <h2>Spanish</h2>
            </div>
            <div className="top-courses__module__content__text">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                SPANISH TAB
                Nam totam voluptatum autem eum incidunt, expedita laboriosam architecto repellat officiis at?
              </p>
            </div>
          </div>
        </div>
        

      </section>

      {/* ===== TEXT ===== */}
      <section className="top-courses__text">
        <h1 className="top-courses__text__header">Top Courses</h1>
        <h2 className="top-courses__text__sub-header">Get ahead with our <br /> most demanded courses</h2>
        <p className="top-courses__text__content">Or check out our full course catalog</p>
        <a className="top-courses__text__link link" href='/'>Click Here</a>
      </section>
    </div>
  )
}

export default TopCourses
