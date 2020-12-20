import React from 'react'
import { Link } from 'react-router-dom'
import DarbazAli from '../assets/DarbazAli.png'
import '../styles/about-section.css'
const AboutSection = () => {
  return (
    <section className='about'>
      <div>
        <h2>About Me</h2>
        <p>
          I’m Darbaz Ali, based in Sulaymaniyah/Iraq. I create UX, design UI,
          and develop Full-Stack web apps from the ground up. I look forward to
          joining a passionate team about technology to learn and grow together,
          meanwhile, create beautiful and usable products that make people’s
          lives easier. As well as helping businesses to survive and generate
          revenue.
        </p>
        <Link to='/contact' className='button button-primary'>
          <span className='button-helper'></span>
          Hire me
        </Link>
      </div>

      <img src={DarbazAli} alt={'Darbaz Ali'} style={{ height: '700px' }} />
    </section>
  )
}

export default AboutSection
