import React from 'react'

import scrollMouse from '../assets/ICON/ic_mouse_24px.svg'
import CenterdContainer from '../components/CenterdContainer'

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
      <img
        style={{ position: 'absolute', bottom: '40px', opacity: '0.5' }}
        src={scrollMouse}
        alt={'scroll mouse icon'}
      />
    </CenterdContainer>
  )
}

export default Hero
