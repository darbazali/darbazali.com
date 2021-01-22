import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Fallback from './components/Fallback'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))

const GithubAPI = lazy(() => import('./sections/GithubAPI'))
const Certifications = lazy(() => import('./sections/Certifications'))
const Hero = lazy(() => import('./sections/Hero'))

const WhyMe = lazy(() => import('./sections/WhyMe'))
const About = lazy(() => import('./screens/About'))
const Contact = lazy(() => import('./screens/Contact'))
// const Resume = lazy(() => import('./screens/Resume'))
const HikeWithMe = lazy(() => import('./screens/HikeWithMe'))
const QuadCaptcha = lazy(() => import('./screens/QuadCaptcha'))

// Home
const ProjectQuadCaptcha = lazy(() => import('./sections/ProjectQuadCaptcha'))
const ProjectHikeWithMe = lazy(() => import('./sections/ProjectHikeWithMe'))
const ProjectURLShortener = lazy(() => import('./sections/ProjectURLShortener'))
const ProjectMIConverter = lazy(() => import('./sections/ProjectMIConverter'))
const ProjectPomodoroClock = lazy(() =>
  import('./sections/ProjectPomodoroClock')
)
const ProjectHeatMap = lazy(() => import('./sections/ProjectHeatMap'))

const App = () => {
  const [showHeader, setShowHeader] = useState(false)
  const [top, setTop] = useState(0)

  useEffect(() => {
    let position = window.scrollY
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll > position && scroll > 60) {
        setShowHeader(0)
        setTop('-78px')
      } else {
        setShowHeader(1)
        setTop(0)
      }
      position = scroll
    })
  }, [showHeader, top])

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Header opacity={showHeader} top={top} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />

          <Route exact path='/about' component={About} />
          {/* <Route exact path='/resume' component={Resume} /> */}
          <Route exact path='/hike-with-me' component={HikeWithMe} />
          <Route exact path='/quad-captcha' component={QuadCaptcha} />
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  )
}

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

export default App
