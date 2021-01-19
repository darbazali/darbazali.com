import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Fallback from './components/Fallback'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const Modal = lazy(() => import('./components/Modal'))
// const Fallback = lazy(() => import('./components/Fallback'))

const GithubAPI = lazy(() => import('./sections/GithubAPI'))
const Hero = lazy(() => import('./sections/Hero'))
const Services = lazy(() => import('./sections/Services'))
const WhyMe = lazy(() => import('./sections/WhyMe'))

// const Home = lazy(() => import('./screens/Home'))
const About = lazy(() => import('./screens/About'))
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
  const [isModalOpen, setIsModalOpen] = useState(false)
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
  }, [isModalOpen, showHeader, top])

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <Router>
      <Suspense fallback={<Fallback />}>
        <Header onToggle={toggleModal} opacity={showHeader} top={top} />
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/about' component={About} />
          <Route exact path='/hike-with-me' component={HikeWithMe} />
          <Route exact path='/quad-captcha' component={QuadCaptcha} /> */}
        </Switch>
        {/* <Footer /> */}
        {isModalOpen ? (
          <Modal onRequestClose={toggleModal} isVisible={isModalOpen} />
        ) : (
          ''
        )}
      </Suspense>
    </Router>
  )
}

const Home = () => {
  return (
    <>
      <h1 className='headline container'>
        Hi, I am Darbaz - A Full-Stack JavaScript Developer based in South
        Kurdistan
      </h1>

      <div className='projects container flex flex-fd-c'>
        <ProjectQuadCaptcha />
        <ProjectHikeWithMe />
        <ProjectURLShortener />
        <ProjectMIConverter />
        <ProjectPomodoroClock />
        <ProjectHeatMap />
      </div>

      {/* <Services /> */}
    </>
  )
}

export default App
