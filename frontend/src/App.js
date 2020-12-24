import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Home from './screens/Home'

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  )
}

export default App
