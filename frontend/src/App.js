import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './screens/Home'
import About from './screens/About'

const App = () => {
  const [showHeader, setShowHeader] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY
      if (scrollTop > 100) {
        setShowHeader(true)
      }
    })
  }, [showHeader])

  return (
    <Router>
      {showHeader ? <Header /> : ''}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
