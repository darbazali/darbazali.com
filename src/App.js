import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import GithubAPI from './sections/GithubAPI'
import Hero from './sections/Hero'
import Services from './sections/Services'
import WhyMe from './sections/WhyMe'

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
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
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
