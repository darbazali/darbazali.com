import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./screens/Home'))
const About = lazy(() => import('./screens/About'))
const Projects = lazy(() => import('./screens/Projects'))
const HikeWithMe = lazy(() => import('./screens/HikeWithMe'))
const QuadCaptcha = lazy(() => import('./screens/QuadCaptcha'))
const Contact = lazy(() => import('./sections/Contact'))

const App = () => {
  const [showHeader, setShowHeader] = useState(0)
  const [top, setTop] = useState(0)

  useEffect(() => {
    let position = window.scrollY
    window.addEventListener('scroll', () => {
      let scroll = window.scrollY
      if (scroll > position && scroll > 60) {
        // scrolling downward
        setShowHeader(0)
        setTop('-78px')
      } else {
        // scrolling upward
        setShowHeader(1)
        setTop(0)
      }
      position = scroll
    })
  }, [showHeader, top])

  return (
    <Router>
      <Header opacity={`${showHeader}`} top={top} />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/hike-with-me' component={HikeWithMe} />
          <Route exact path='/quad-captcha' component={QuadCaptcha} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
