import React from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/mouse-scroll.css'

const MouseScroll = () => {
  return (
    <span className='scroll-btn'>
      <HashLink
        to='/#intro'
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
