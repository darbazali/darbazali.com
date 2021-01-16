import React from 'react'
import CenterdContainer from '../components/CenterdContainer'
const styles = {
  maxWidth: '770px',
  textAlign: 'center',
  margin: '0 auto',
}
const Hero = () => {
  return (
    <CenterdContainer minHeight={'calc(100vh - 78px)'}>
      <div style={styles}>
        <h4
          style={{ fontWeight: '400', marginTop: '-50px', opacity: '0.8' }}
        >{`{Hello, World}`}</h4>

        <h2>This is Darbaz</h2>

        <p style={{ maxWidth: '710px', margin: '0 auto' }}>
          A creative designer and developer based in South Kurdistan. I love
          white space, open-sourcing, solving interesting problems, and building
          muscles along the way.
        </p>
      </div>
    </CenterdContainer>
  )
}

export default Hero
