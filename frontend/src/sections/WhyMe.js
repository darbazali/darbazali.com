import React from 'react'
import CenterdContainer from '../components/CenterdContainer'

const sectionStyle = {
  textAlign: 'center',
  margin: '0 auto',
  padding: '0',
  color: '#000',
  backgroundColor: '#fcc230',
}

const WhyMe = () => {
  return (
    <section style={sectionStyle}>
      <CenterdContainer>
        <div
          style={{
            maxWidth: '680px',
            textAlign: 'center',
          }}
        >
          <h3 style={{ fontWeight: '700' }}>Why work with me?</h3>
          <p
            style={{
              fontWeight: '500',
              fontSize: '2em',
              lineHeight: '40px',
              margin: '0 auto',
            }}
          >
            As you might see, I wear a lot of hats when dealing with a digital
            product. I look at the system from different angels. I can
            contribute to the full product development lifecycle from the very
            first idea all the way up to IPO.
          </p>
        </div>
      </CenterdContainer>
    </section>
  )
}

export default WhyMe
