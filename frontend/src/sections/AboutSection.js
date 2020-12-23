import React from 'react'

import DarbazAli from '../assets/DarbazAli.jpg'
import Button from '../components/Button'
import FlexContainer from '../components/FlexContainer'

const imgStyle = {
  borderRadius: '30px',
  height: '600px',
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.06)',
}

const AboutSection = () => {
  return (
    <section>
      <FlexContainer
        container
        alignItems='center'
        alignContent='center'
        justifyContent='space-between'
      >
        <img src={DarbazAli} alt={'Darbaz Ali'} style={imgStyle} />
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
