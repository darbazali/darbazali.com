import React from 'react'
import checkIcon from '../assets/ICON/check_icon.svg'

const Hero = () => {
  return (
    <div id='hero'>
      <h1>
        Hi, I am Darbaz - A Creative Designer &amp; Full-Stack JavaScript
        Developer based in South Kurdistan
      </h1>

      <ul className='flex flex-jc-sb'>
        <li>
          <img src={checkIcon} alt='check icon' height='16' width='16' />{' '}
          Full-Stack Web Development
        </li>

        <li>
          <img src={checkIcon} alt='check icon' height='16' width='16' /> UX/UI
          Design
        </li>

        <li>
          <img src={checkIcon} alt='check icon' height='16' width='16' /> MVP
          Building
        </li>
      </ul>
    </div>
  )
}

export default Hero
