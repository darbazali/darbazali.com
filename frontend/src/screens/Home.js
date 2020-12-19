import React from 'react'
import AboutSection from '../sections/AboutSection'
import { Hero } from '../sections/Hero'
import Services from '../sections/Services'

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <AboutSection />
      <Services />
    </div>
  )
}

export default Home
