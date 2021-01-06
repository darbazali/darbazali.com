import React from 'react'

import Button from '../components/Button'
import FlexContainer from '../components/FlexContainer'
import DarbazAli from '../assets/DARBAZ_ALI_HERO_IMAGE.png'

const imgStyle = {
  borderRadius: '30px',
  width: '100%',
  height: 'auto',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.06)',
}

const AboutSection = () => {
  return (
    <section style={{ width: '100%', height: '100vh' }} id='aboutme'>
      <FlexContainer
        className='column'
        container
        alignItems='center'
        alignContent='center'
        justifyContent='space-between'
      >
        <div
          style={{ width: '50%', backgroundColor: '#000' }}
          className='about-image'
        >
          <img src={DarbazAli} alt={'Darbaz Ali'} style={imgStyle} />
        </div>

        <div>
          <h4>About Me</h4>
          <p style={{ maxWidth: '450px' }}>
            I’m Darbaz Ali, based in Sulaymaniyah/Iraq. I create UX, design UI,
            and develop Full-Stack web apps from the ground up. I look forward
            to joining a passionate team about technology to learn and grow
            together, meanwhile, create beautiful and usable products that make
            people’s lives easier. As well as helping businesses to survive and
            generate revenue.
          </p>

          <Button className='button'>Hire me</Button>
        </div>
      </FlexContainer>
    </section>
  )
}

export default AboutSection
