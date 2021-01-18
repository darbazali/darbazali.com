import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'
// import './index.css'
import './styles/style.css'
import App from './App'

import smoothscroll from 'smoothscroll-polyfill'

// kick off the polyfill!
smoothscroll.polyfill()
window.__forceSmoothScrollPolyfill__ = true

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
