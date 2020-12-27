import React, { useState } from 'react'
import axios from 'axios'
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
      <FlexContainer
        container
        alignItems='center'
        alignContent='center'
        justifyContent='space-around'
      >
        <ContactMessage />
        <form onSubmit={handleSendEmail}>
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
              placeholder='Prepare Raytheon MIM-23 HAWK for counter lunch!'
            ></textarea>
            <label htmlFor='message'>Message</label>
          </div>

          <Button className='button' type='submit' onClick={handleSendEmail}>
            {loading ? 'Sending..' : 'Send Message'}
          </Button>
        </form>
      </FlexContainer>
    </section>
  )
}

const ContactMessage = () => {
  return (
    <div style={{ width: '300px' }}>
      <h3>Contact</h3>
      <p>
        Whether you have a product/service problem, or just wanna say hi , feel
        free to shoot me an email, and I will be in touch asap.
      </p>
    </div>
  )
}

export default Contact
