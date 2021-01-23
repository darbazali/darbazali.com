import React, { useState, useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Fallback from './components/Fallback'
import Header from './components/Header'
import Footer from './components/Footer'

const About = lazy(() => import('./screens/About'))
const Contact = lazy(() => import('./screens/Contact'))
const Home = lazy(() => import('./sections/Home'))
const HikeWithMe = lazy(() => import('./screens/HikeWithMe'))
const QuadCaptcha = lazy(() => import('./screens/QuadCaptcha'))

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
      <Header opacity={showHeader} top={top} />
      <Suspense fallback={<Fallback />}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />

          <Route exact path='/about' component={About} />
          <Route exact path='/hike-with-me' component={HikeWithMe} />
          <Route exact path='/quad-captcha' component={QuadCaptcha} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default App
