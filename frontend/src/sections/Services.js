import React from 'react'
import '../styles/services.css'

import uxIcon from '../assets/noun_ux_693504.svg'
import startUpIcon from '../assets/noun_startup_1806706.svg'
import webDevIcon from '../assets/noun_web_development_3471717.svg'

const Services = () => {
  return (
    <section className='services'>
      <h5>Services</h5>
      <div className='service-cards'>
        <div className='service-cart'>
          <img src={webDevIcon} alt='webDevIcon' />
          <h5>Full-Stack Web Development</h5>

          <p>Building Full-Stack web apps with javascript (MERN) stack.</p>
        </div>

        <div className='service-cart'>
          <img src={uxIcon} alt='UX Icon' />
          <h5>UI/UX Design</h5>
          <p>
            Designing digital products in a user-centric approach, with
            strategic thinking, in order to build products that make a
            differece.
          </p>
        </div>

        <div className='service-cart'>
          <img src={startUpIcon} alt='startup icon' />
          <h5>Building MVPs</h5>
          <p>
            Creating Light-weight MVPs for Startup companies to reach early
            customers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
