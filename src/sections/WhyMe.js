import React from 'react'
import Button from '../components/Button'

const sectionStyle = {
  textAlign: 'center',
  width: '100%',
  height: 'auto',
  padding: '10vh 0',
  backgroundColor: '#fff',
}

const WhyMe = () => {
  return (
    <section style={sectionStyle}>
      <h2 style={{ fontWeight: '600' }}>Why work with me?</h2>
      <p
        style={{
          fontWeight: '400',
          fontSize: '1em',
          maxWidth: '588px',
          margin: '1em auto',
        }}
      >
        As you might see, I wear a lot of hats when dealing with a digital
        Product. I look at the system from different angles. I can contribute to
        the full product development lifecycle.
      </p>
      <a href='mailto:darbaz.me@gmail.com'>
        <Button>Shoot me an email</Button>
      </a>
    </section>
  )
}

export default WhyMe
