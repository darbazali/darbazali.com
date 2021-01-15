import React from 'react'

import GithubAPI from '../sections/GithubAPI'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import WhyMe from '../sections/WhyMe'

const Home = () => {
  return (
    <>
      <Hero />

      <Services />
      <Projects />
      <GithubAPI />

      <WhyMe />
    </>
  )
}

export default Home