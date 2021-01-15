import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const Header = lazy(() => import('./components/Header'))
const Footer = lazy(() => import('./components/Footer'))
const Modal = lazy(() => import('./components/Modal'))

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

  useEffect(() => {}, [isModalOpen])

  const toggleModal = () => setIsModalOpen(!isModalOpen)

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header onToggle={toggleModal} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/hike-with-me' component={HikeWithMe} />
          <Route exact path='/quad-captcha' component={QuadCaptcha} />
        </Switch>
        <Footer />
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

export default App
