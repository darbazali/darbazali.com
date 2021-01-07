import React from 'react'
import Button from '../components/Button'
import { HashLink } from 'react-router-hash-link'

const styles = {
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  padding: '100px 0',
}

const AboutSection = () => {
  return (
    <section style={styles} id='aboutme'>
      <h4>About me</h4>
      <p style={{ maxWidth: '380px', margin: '20px auto' }}>
        I’m Darbaz, a self-starter, self-motivated digital product enthusiast. I
        love building products that make people’s lives easier.
      </p>

      <HashLink to='/#contact'>
        <Button type='button'>Hire me</Button>
      </HashLink>
    </section>
  )
}

export default AboutSection
