import React, { lazy } from 'react'

import GithubAPI from '../sections/GithubAPI'
import Hero from '../sections/Hero'
import Services from '../sections/Services'
import WhyMe from '../sections/WhyMe'

const ProjectQuadCaptcha = lazy(() => import('../sections/ProjectQuadCaptcha'))
const ProjectHikeWithMe = lazy(() => import('../sections/ProjectHikeWithMe'))
const ProjectURLShortener = lazy(() =>
  import('../sections/ProjectURLShortener')
)

const ProjectMIConverter = lazy(() => import('../sections/ProjectMIConverter'))
const ProjectPomodoroClock = lazy(() =>
  import('../sections/ProjectPomodoroClock')
)
const ProjectHeatMap = lazy(() => import('../sections/ProjectHeatMap'))

const Home = () => {
  return (
    <>
      <Hero />

      <Services />
      <ProjectQuadCaptcha />
      <ProjectHikeWithMe />
      <ProjectURLShortener />
      <ProjectMIConverter />
      <ProjectPomodoroClock />
      <ProjectHeatMap />
      <GithubAPI />

      <WhyMe />
    </>
  )
}

export default Home
