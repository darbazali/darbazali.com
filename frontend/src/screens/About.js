import React from 'react'
import AboutSection from '../sections/AboutSection'
import SkillSet from '../sections/SkillSet'
import Certifications from '../sections/Certifications'

const About = () => {
  return (
    <>
      <div className='container'>
        <AboutSection />
      </div>
      <SkillSet />
      <div className='container'>
        <Certifications />
      </div>
    </>
  )
}

export default About
