import React from 'react'
import Rellax from 'react-rellax'
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
      <Rellax speed={1}>
        <h4>About me</h4>
      </Rellax>

      <Rellax speed={1}>
        <p style={{ maxWidth: '380px', margin: '20px auto' }}>
          I’m Darbaz, a self-starter, self-motivated digital product enthusiast.
          I love building products that make people’s lives easier.
        </p>
      </Rellax>

      <HashLink
        to='/#contact'
        scroll={(el) =>
          el.scrollIntoView({ behavior: 'smooth', block: 'start', offset: 1 })
        }
      >
        <Button type='button'>Hire me</Button>
      </HashLink>
    </section>
  )
}

export default AboutSection
