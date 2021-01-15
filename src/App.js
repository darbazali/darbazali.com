import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./screens/Home'))
const About = lazy(() => import('./screens/About'))
const HikeWithMe = lazy(() => import('./screens/HikeWithMe'))
const QuadCaptcha = lazy(() => import('./screens/QuadCaptcha'))

const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
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
