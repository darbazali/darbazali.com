import React from 'react'
import '../styles/services.css'
const Services = () => {
  return (
    <section className='services'>
      Services
      <div className='service-cards'>
        <div className='service-cart vert'>
          <h2>Full-Stack Web Development</h2>
          <p>
            I develop Full-Stack web apps with javascript (MERN) Stack, I create
            UI Systems with React, Visualize data with D3.js, and Back-End
            systems with Node and MongoDB.
          </p>
        </div>
        <div>
          <div className='service-cart'>
            <h2>UI/UX Design</h2>
            <p>
              I create seamless user experiences by designing products in a
              user-centric approach and design beautiful user interfaces to make
              the product stand out in terms of usability and aesthetics.
            </p>
          </div>

          <div className='service-cart'>
            <h2>Building MVPs</h2>
            <p>
              If you have a multimillion-dollar idea and want to reach early
              customers through a light-weight MVP, I got you covered.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
