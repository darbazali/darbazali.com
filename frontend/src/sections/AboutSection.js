import React from 'react'

import DarbazAli from '../assets/DarbazAli.jpg'
import '../styles/about-section.css'
const AboutSection = () => {
  return (
    <section className='about'>
      <img src={DarbazAli} alt={'Darbaz Ali'} style={{ height: '600px' }} />
      <div>
        <h4>About Me</h4>
        <p>
          I’m Darbaz Ali, based in Sulaymaniyah/Iraq. I create UX, design UI,
          and develop Full-Stack web apps from the ground up. I look forward to
          joining a passionate team about technology to learn and grow together,
          meanwhile, create beautiful and usable products that make people’s
          lives easier. As well as helping businesses to survive and generate
          revenue.
        </p>

        <a href='/#contact' className='button button-primary'>
          Hire me
        </a>
      </div>
    </section>
  )
}

export default AboutSection
