import React from 'react'
import Rellax from 'react-rellax'
import DARBAZ_ALI from '../assets/DARBAZ_ALI.jpg'

const wrapper = {
  position: 'relative',
  background: '#000',
  color: '#fafafa',
  width: '100%',
  marginTop: '-1em',
}

const contentStyle = {
  maxWidth: '605px',
  margin: '0 auto',
  padding: '0 1em 2em 1em',
}

const titleStyle = {
  position: 'absolute',
  top: '-180px',
  padding: '0 0 1em',
}
const AboutMe = () => {
  return (
    <section
      id='about-screen'
      style={{
        width: '100%',
        padding: '0',
        margin: '0 auto',
        marginBottom: '1em',
      }}
    >
      <Rellax speed='-2'>
        <img
          src={DARBAZ_ALI}
          alt='DARBAZ ALI'
          style={{ width: '100%', height: 'auto', margin: '0' }}
        />
      </Rellax>

      <div style={wrapper}>
        <div style={contentStyle}>
          <Rellax speed='3'>
            <h2 style={titleStyle} id='about-title'>
              About Me
            </h2>
          </Rellax>

          <Rellax speed='2'>
            <p>
              I'm Darbaz Ali, a creative designer, and developer based in
              Sulaymaniyah/Iraq. I have a great passion for technology,
              especially software development.
            </p>
            <p>
              I look forward to joining a small and dedicated team to learn and
              grow together, meanwhile solving tech-related problems for
              businesses, and making both users and stakeholders happy.
            </p>
            <p>
              I would love to connect with like-minded people and gain new
              friends that have an equal passion for tech.
            </p>
          </Rellax>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
