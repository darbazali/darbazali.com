import React, { Suspense, lazy } from 'react'

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
      <Suspense fallback={<div>Loading projects..</div>}>
        <ProjectQuadCaptcha />
        <ProjectHikeWithMe />
        <ProjectURLShortener />
        <ProjectMIConverter />
        <ProjectPomodoroClock />
        <ProjectHeatMap />
      </Suspense>

      <GithubAPI />

      <WhyMe />
    </>
  )
}

export default Home
