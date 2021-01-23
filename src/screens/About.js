import React, { useEffect } from 'react'
import '../styles/about.css'
import DarbazAli from '../assets/JPEG/Darbaz_Ali.jpg'

const About = () => {
  useEffect(() => (document.title = 'Darbaz Ali | About'))
  return (
    <section id='about' className='container'>
      <img src={DarbazAli} alt='Darbaz Ali' width='400' height='400' />
      <div className='about-content'>
        <h1>About me</h1>
        <p>
          I'm Darbaz Ali, a mission-driven Web Developer and UX/UI Designer
          based in South Kurdistan. I craft digital web apps from the very first
          idea with tools like design thinking to be user-centric, turning the
          process into pixels with (Xd and Sketch), then transforming pixels
          into code with Node.js and React.js, ultimately shipping the product
          with platforms like Heroku and Firebase.
        </p>

        <h3>How I got here?</h3>
        <p>
          Last year, I tried to build my SASS startup. The idea was to tackle a
          well know problem, CAPTCHAs. I wanted to reinvent the solution from
          scratch, the platform was the web, so I had to learn everything
          related to digital products.
          <br />
          <br />
          After I created a light-weight MVP, I applied to YC 2020 winter batch,
          but unfortunately, the idea wasn't' good enough to put in front of
          investors and raise some money. But high enough, throughout that
          process, I gained such skills that made me a whole new different
          person and gave me an upper hand to have an unfair advantage for the
          next opportunity.
        </p>

        <h3>What I'm looking to go next?</h3>

        <p>
          Now, I'm looking for an opportunity to join a supportive, growing
          community and passionate team that let me apply my acquired skills to
          tackle interesting problems and (possibly) creating the next big thing
          of the internet.
          <br />
          <br />
          Sounds familiar? If so, I'm always interested in new challenges.
        </p>

        <a href='mailto:darbaz.me@gmail.com' className='button-primary'>
          Shoot me an email
        </a>
      </div>
    </section>
  )
}

export default About
