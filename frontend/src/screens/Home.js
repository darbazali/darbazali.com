import React from 'react'
import AboutSection from '../sections/AboutSection'
import Contact from '../sections/Contact'
import GithubAPI from '../sections/GithubAPI'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import WhyMe from '../sections/WhyMe'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <AboutSection />
        <Services />
        <Projects />
        <GithubAPI />
      </div>

      <WhyMe />
      <div className='container'>
        <Contact />
      </div>
    </>
  )
}

export default Home
