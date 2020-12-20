import React from 'react'
import AboutSection from '../sections/AboutSection'
import GithubAPI from '../sections/GithubAPI'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'

const Home = () => {
  return (
    <div className='container'>
      <Hero />
      <AboutSection />
      <Services />
      <Projects />
      <GithubAPI />
    </div>
  )
}

export default Home
