import React, { useEffect, useState } from 'react'

import MouseScroll from '../components/MouseScroll'
import HeroBack from '../assets/hero_back.jpg'
import CoverImage from '../components/CoverImage'

const heroStyle = {
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const titleStyle = {
  fontWeight: '600',
  borderBottom: '1px solid #555555',
}

const Hero = () => {
  const [shwoScroller, setShowScroller] = useState(0.6)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY
      if (scrollTop > 50) {
        setShowScroller(0)
      } else {
        setShowScroller(0.6)
      }
    })
  }, [shwoScroller])
  return (
    <CoverImage
      image={HeroBack}
      backgroundColor='radial-gradient(rgba(13, 14, 14, 0.67) 0%, rgba(13, 14, 14, 0.68) 100%)'
      style={heroStyle}
      id='hero'
    >
      <div style={{ marginTop: '-80px' }}>
        <h3 style={titleStyle}>Hello, I am Darbaz</h3>
        <h5 style={{ marginTop: '22px', opacity: '0.8' }}>
          Creative designer and developer
        </h5>
      </div>

      <MouseScroll opacity={`${shwoScroller}`} />
    </CoverImage>
  )
}

export default Hero
