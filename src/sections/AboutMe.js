import React from 'react'
import CenterdContainer from '../components/CenterdContainer'

const styles = {
  maxWidth: '1028px',
  textAlign: 'center',
  margin: '0 auto',
}

const AboutMe = () => {
  return (
    <CenterdContainer height={'calc(100vh - 78px)'} id='about'>
      <div style={styles}>
        <h2 style={{ marginTop: '-50px' }}>About me</h2>
        <p>
          I'm Darbaz Ali, a creative designer, and developer based in
          Sulaymaniyah/Iraq. I have a great passion for technology, especially
          software development.
        </p>
        <p>
          I look forward to joining a small and dedicated team to learn and grow
          together, meanwhile solving tech-related problems for businesses, and
          making both users and stakeholders happy.
        </p>
        <p>
          I would love to connect with like-minded people and gain new friends
          that have an equal passion for tech.
        </p>
      </div>
    </CenterdContainer>
  )
}

export default AboutMe
