import React from 'react'
import Button from '../components/Button'

const styles = {
  textAlign: 'center',
  width: '100%',
  height: '70vh',
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

      <Button type='button'>Hire me</Button>
    </section>
  )
}

export default AboutSection
