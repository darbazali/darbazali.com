import React, { useEffect } from 'react'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
import '../styles/contact.css'
const Contact = () => {
  useEffect(() => (document.title = 'Darbaz Ali | Contact'))
  return (
    <section className='container' id='contact'>
      <h1>Get in touch</h1>
      <p>
        Whether you have a product/service problem, or just wanna say hi , feel
        free to shoot me an email, and I will be in touch asap.
      </p>

      <a href='mailto:darbaz.me@gmail.com' className='button-primary'>
        Shoot me an email
      </a>

      <h3>Find me on</h3>
      <div className='socials flex flex-jc-sb'>
        <a href='https://github.com/DarbazAli'>
          <Github size={44} />
        </a>

        <a href='https://www.linkedin.com/in/darbaz/'>
          <Linkedin size={44} />
        </a>
      </div>
    </section>
  )
}

export default Contact
