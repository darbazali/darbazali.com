import React, { useState } from 'react'
import axios from 'axios'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'

import Button from '../components/Button'

import '../styles/contact.css'

import FlexContainer from '../components/FlexContainer'

const Contact = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('/access', {
        email,
        subject,
        message,
      })
      .then((res) => {
        setLoading(false)
        alert('Message sent')
        resetForm()
      })
  }

  const resetForm = () => {
    setEmail('')
    setSubject('')
    setMessage('')
  }
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <ContactMessage />

        <div className='col'>
          <form onSubmit={handleSendEmail}>
            <h5>Send a message</h5>
            <div className='field'>
              <input
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                placeholder='agent@station.com'
              ></input>
              <label htmlFor='email'>Email</label>
            </div>

            <div className='field'>
              <input
                type='text'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id='subject'
                placeholder='Aliens are comming'
              ></input>
              <label htmlFor='subject'>Subject</label>
            </div>

            <div className='field'>
              <textarea
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Prepare Tomahawk for counter lunch!'
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>

            <Button className='button' type='submit' onClick={handleSendEmail}>
              {loading ? 'Sending..' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

const ContactMessage = () => {
  return (
    <div className='contact-message col'>
      <h3>Get in touch</h3>
      <p style={{ marginBottom: '70px', maxWidth: '300px' }}>
        Whether you have a product/service problem, or just wanna say hi , feel
        free to shoot me an email, and I will be in touch asap.
      </p>

      <hr style={{ marginBottom: '20px', maxWidth: '300px' }} />

      <h5>Find me on</h5>
      <Socials />
    </div>
  )
}

const Socials = () => (
  <div className='socials'>
    <a href='https://github.com/DarbazAli' style={{ marginRight: '2em' }}>
      <Github size={44} fill='#697285' />
    </a>
    <a href='https://www.linkedin.com/in/darbaz/'>
      <Linkedin size={44} fill='#697285' />
    </a>
  </div>
)

export default Contact
