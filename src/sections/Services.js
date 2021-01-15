import React from 'react'
import Rellax from 'react-rellax'

import FlexContainer from '../components/FlexContainer'

const serviceStyle = {
  color: '#1f2122',
  backgroundColor: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const Services = () => {
  return (
    <section style={serviceStyle} id='services'>
      <div>
        <Rellax speed={0}>
          <h4>What I do with Computers?</h4>
          <p style={{ maxWidth: '280px', margin: '1em auto' }}>
            I wear a lot of hats when it comes to deal with digital products
          </p>
        </Rellax>

        <Rellax speed={2}>
          <FlexContainer
            className='services'
            container
            alignItems='flex-start'
            justifyContent='space-evenly'
            alignContent='center'
            flexWrap='wrap'
            margin='200px auto 0 auto'
            height='200px'
          >
            <div className='service-card'>UX/UI Design</div>
            <div className='service-card'>Full-Stack Web Development</div>
            <div className='service-card'>Building MVPs</div>
          </FlexContainer>
        </Rellax>
      </div>
    </section>
  )
}

export default Services
