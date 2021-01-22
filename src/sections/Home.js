import React, { lazy } from 'react'
const GithubAPI = lazy(() => import('../sections/GithubAPI'))
const Certifications = lazy(() => import('../sections/Certifications'))
const Hero = lazy(() => import('../sections/Hero'))

const WhyMe = lazy(() => import('../sections/WhyMe'))
// Home
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
