import React from 'react'

function Courses() {
  return (
    <div className='top-courses__container'>
      <div className="top-courses__module">
        MODULE HERE
      </div>
      <section className="top-courses__text">
        <h1 className="top-courses__text__header">Top Courses</h1>
        <h2 className="top-courses__text__sub-header">Get ahead with our <br /> most demanded courses</h2>
        <p className="top-courses__text__content">Or check out our full course catalog</p>
        <a className="top-courses__text__link link" href='/'>Click Here</a>
      </section>
    </div>
  )
}

export default Courses
