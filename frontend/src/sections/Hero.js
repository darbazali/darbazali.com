import React, { useEffect, useState } from 'react'

import CenterdContainer from '../components/CenterdContainer'
import MouseScroll from '../components/MouseScroll'

const titleStyle = {
  fontSize: '287px',
  fontWeight: '700',
  lineHeight: '100%',
  textAlign: 'center',
  textTransform: 'uppercase',
  color: '#4d5057',
  textShadow: '0px 10px 20px rgba(0, 0, 0, 0.33)',
  margin: '0',
}

const Hero = () => {
  const [shwoScroller, setShowScroller] = useState(0.8)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let scrollTop = window.scrollY
      if (scrollTop > 50) {
        setShowScroller(0)
      } else {
        setShowScroller(0.8)
      }
    })
  }, [shwoScroller])
  return (
    <CenterdContainer>
      <div style={{ width: '95%', height: '450px' }}>
        <h4 style={{ margin: '0', marginLeft: '16px', fontWeight: '600' }}>
          Hello, I am
        </h4>
        <h1 style={titleStyle}>DARBAZ</h1>
        <h5
          style={{
            margin: '0',
            float: 'right',
            marginRight: '16px',
            fontWeight: '500',
          }}
        >
          I design and build web apps
        </h5>
      </div>

      <MouseScroll opacity={`${shwoScroller}`} />
    </CenterdContainer>
  )
}

export default Hero
