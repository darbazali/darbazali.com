import React from 'react'
import '../styles/services.css'
import FlexContainer from '../components/FlexContainer'

import CoverImage from '../components/CoverImage'
import skillsBack from '../assets/skills_back.jpg'

const serviceStyle = {
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const Services = () => {
  return (
    <CoverImage
      image={skillsBack}
      backgroundColor='rgba(31, 33, 34, 0.85)'
      style={serviceStyle}
    >
      <div>
        <h3>What I do?</h3>
        <p style={{ maxWidth: '280px', margin: '1em auto' }}>
          I wear a lot of hats when it comes to deal with digital products
        </p>
        <FlexContainer
          container
          alignItems='flex-start'
          justifyContent='space-evenly'
          alignContent='center'
          flexWrap='wrap'
        >
          <div className='service-card'>Full-Stack Development</div>
          <div className='service-card'>UX/UI Design</div>
          <div className='service-card'>Building MVPs</div>
        </FlexContainer>
      </div>
    </CoverImage>
  )
}

export default Services
