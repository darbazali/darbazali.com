import React from 'react'
import CenterdContainer from '../components/CenterdContainer'
const styles = {
  maxWidth: '770px',
  textAlign: 'center',
  margin: '0 auto',
}
const Hero = () => {
  return (
    <CenterdContainer height={'calc(100vh - 78px)'}>
      <div style={styles}>
        <h4
          style={{ fontWeight: '400', marginTop: '-50px' }}
        >{`{Hello, World}`}</h4>

        <h2>This is Darbaz</h2>

        <p style={{ maxWidth: '630px', margin: '0 auto' }}>
          A creative designer and developer based in South Kurdistan. He loves
          to build muscles, open-sourcing and solving interesting problems along
          the way.
        </p>
      </div>
    </CenterdContainer>
  )
}

export default Hero
