import React from 'react'

import GithubAPI from '../sections/GithubAPI'
import Certifications from '../sections/Certifications'
import Hero from '../sections/Hero'
import WhyMe from '../sections/WhyMe'
import ProjectQuadCaptcha from '../sections/ProjectQuadCaptcha'
import ProjectHikeWithMe from '../sections/ProjectHikeWithMe'
import ProjectURLShortener from '../sections/ProjectURLShortener'
import ProjectMIConverter from '../sections/ProjectMIConverter'
import ProjectPomodoroClock from '../sections/ProjectPomodoroClock'
import ProjectHeatMap from '../sections/ProjectHeatMap'

const Home = () => {
  return (
    <>
      <Hero />

      <div className='projects container flex flex-fd-c'>
        <ProjectQuadCaptcha />
        <ProjectHikeWithMe />
        <ProjectURLShortener />
        <ProjectMIConverter />
        <ProjectPomodoroClock />
        <ProjectHeatMap />
      </div>

      <GithubAPI />
      <Certifications />
      <WhyMe />
    </>
  )
}

export default Home
