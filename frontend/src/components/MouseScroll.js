import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/mouse-scroll.css'

const MouseScroll = ({ opacity }) => {
  return (
    <span
      className='scroll-btn'
      style={{ opacity: opacity, transition: 'all 0.5s ease-out' }}
    >
      <HashLink
        to='/#aboutme'
        scroll={(el) =>
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      >
        <span className='mouse'>
          <span></span>
        </span>
      </HashLink>
      <p>learn more</p>
    </span>
  )
}

export default MouseScroll
