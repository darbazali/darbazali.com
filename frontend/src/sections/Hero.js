import React from 'react'
import '../styles/hero.css'
import scrollMouse from '../assets/ic_mouse_24px.svg'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <h4>Hello, I am</h4>
        <h1>DARBAZ</h1>
        <h5>I design and build web apps</h5>
      </div>
      <img src={scrollMouse} alt={'scroll mouse icon'} />
    </div>
  )
}

export default Hero
