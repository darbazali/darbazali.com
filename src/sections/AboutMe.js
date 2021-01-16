import React from 'react'
import CenterdContainer from '../components/CenterdContainer'

const styles = {
  maxWidth: '1028px',
  textAlign: 'left',
  margin: '0 auto',
  padding: '2em 1em',
}

const AboutMe = () => {
  return (
    <CenterdContainer minHeight='100vh' id='about'>
      <div style={styles}>
        <h2 style={{ marginTop: '-50px' }}>About me</h2>
        <p>
          I'm Darbaz Ali, a self-starter, self-motivated digital product
          enthusiast. I love building products that make people's lives easier.
        </p>
        <p>
          've studied Electronics, both hardware, and software. Soon I realized
          that writing software is my passion.
        </p>
        <p>
          I began with MATLAB, a high-level, industrial, multi-paradigm, and
          numeric computing programming language.
        </p>
        <p>
          The next move was Python, I learned the syntax, it was quite different
          from traditional programming languages. Simply put, it was awesome to
          learn Python.
        </p>
        <p>
          Then I hit javaScript. As soon as I realized that it's everywhere, I
          couldn't leave javaScript to another language. Now, I use it for
          various kinds of computing, especially with the web, Front-End, and
          Back-End.
        </p>
      </div>
    </CenterdContainer>
  )
}

export default AboutMe
