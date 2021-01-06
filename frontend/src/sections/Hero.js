import React, { useEffect, useState } from 'react'

import MouseScroll from '../components/MouseScroll'
import HeroBack from '../assets/hero_back.jpg'

const heroStyle = {
  backgroundImage: `url(${HeroBack})`,
  backgroundPosition: 'center center',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',

  width: '100%',
  height: '100vh',
  color: '#ffffff',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const titleStyle = {
  fontWeight: '600',
  borderBottom: '1px solid #f5f5f5',
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
    <section style={heroStyle}>
      <div>
        <h3 style={titleStyle}>Hello, I am Darbaz</h3>
        <h5 style={{ marginTop: '22px' }}>Creative designer and developer</h5>
      </div>

      <MouseScroll opacity={`${shwoScroller}`} />
    </section>
  )
}

export default Hero
