import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import About from './screens/About'
import Projects from './screens/Projects'
import HikeWithMe from './screens/HikeWithMe'
import QuadCaptcha from './screens/QuadCaptcha'

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
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/hike-with-me' component={HikeWithMe} />
        <Route path='/quad-captcha' component={QuadCaptcha} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
