import React from 'react'
import { HashLink } from 'react-router-hash-link'
import Button from '../components/Button'

const sectionStyle = {
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  padding: '100px 0',
  backgroundColor: '#fafafa',
}

const WhyMe = () => {
  return (
    <section style={sectionStyle}>
      <h4 style={{ fontWeight: '600' }}>Why work with me?</h4>
      <p
        style={{
          fontWeight: '400',
          fontSize: '1em',
          maxWidth: '460px',
          margin: '0 auto',
        }}
      >
        As you might see, I wear a lot of hats when dealing with a digital
        Product. I look at the system from different angles. I can contribute to
        the full product development lifecycle.
      </p>

      <HashLink to='/#contact'>
        <Button>Hire me</Button>
      </HashLink>
    </section>
  )
}

export default WhyMe
