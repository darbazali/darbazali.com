import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/mouse-scroll.css'
const MouseScroll = () => {
  return (
    <span className='scroll-btn'>
      <HashLink to='/#aboutme'>
        <span className='mouse'>
          <span></span>
        </span>
      </HashLink>
      <p>scroll</p>
    </span>
  )
}

export default MouseScroll
