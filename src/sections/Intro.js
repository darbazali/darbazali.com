import React from 'react'
import Rellax from 'react-rellax'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

const styles = {
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  padding: '100px 0',
}

const AboutSection = () => {
  return (
    <section style={styles} id='intro'>
      <Rellax speed={1}>
        <h4>About me</h4>
      </Rellax>

      <Rellax speed={1}>
        <p style={{ maxWidth: '380px', margin: '20px auto' }}>
          I’m Darbaz, a self-starter, self-motivated digital product enthusiast.
          I love building products that make people’s lives easier.
        </p>
      </Rellax>

      <Link to='/contact'>
        <Button type='button'>Hire me</Button>
      </Link>
    </section>
  )
}

export default AboutSection
