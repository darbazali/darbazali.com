import React from 'react'
import '../styles/hero.css'
import scrollMouse from '../assets/ic_mouse_24px.svg'
export const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-content'>
        <h2>HELLO, I AM</h2>
        <h1>DARBAZ</h1>
        <h3>I design and build web apps</h3>
      </div>
      <img src={scrollMouse} alt={'scroll mouse icon'} />
    </div>
  )
}
