import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'

import '../styles/contact.css'

import Button from '../components/Button'
import Modal from '../components/Modal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'

const sendIcon = <FontAwesomeIcon icon={faPaperPlane} />
const loadingIcon = <FontAwesomeIcon icon={faSpinner} className='fa-spin' />

const Contact = () => {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const [loading, setLoading] = useState(false)

  const [isModalOpen, setModalIsOpen] = useState(false)

  useEffect(() => {}, [loading])

  const handleSendEmail = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const sendMessage = await axios.post('/access', {
        email,
        subject,
        message,
      })
      if (sendMessage.status === 200) {
        toggleModal()
        resetForm()
      }
    } catch (error) {
      setError('There was a problem sending message, please try again')
      toggleModal()
      resetForm()
    }
  }

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen)
  }

  const resetForm = () => {
    setEmail('')
    setSubject('')
    setMessage('')
    setLoading(false)
  }
  return (
    <section
      style={{ padding: '0', paddingTop: '60px' }}
      className='contact'
      id='contact'
    >
      <div className='container'>
        <ContactMessage />

        <div className='col'>
          <form onSubmit={handleSendEmail}>
            <h5>Send a message</h5>
            <div className='field'>
              <input
                required
                type='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id='email'
                placeholder='email'
              ></input>
              <label htmlFor='email'>Email</label>
            </div>

            <div className='field'>
              <input
                required
                type='text'
                name='subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                id='subject'
                placeholder='subject'
              ></input>
              <label htmlFor='subject'>Subject</label>
            </div>

            <div className='field'>
              <textarea
                required
                name='message'
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='message'
              ></textarea>
              <label htmlFor='message'>Message</label>
            </div>
            <Button type='submit'>
              {loading ? (
                <span>{loadingIcon} Sending..</span>
              ) : (
                <span>{sendIcon} Send message</span>
              )}
            </Button>
          </form>
        </div>
      </div>
      {isModalOpen && <Modal onRequestClose={toggleModal} error={error} />}
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
  <div className='socials' style={{ opacity: 0.8 }}>
    <a href='https://github.com/DarbazAli' style={{ marginRight: '2em' }}>
      <Github size={44} fill='#1f2122' />
    </a>
    <a href='https://www.linkedin.com/in/darbaz/'>
      <Linkedin size={44} fill='#1f2122' />
    </a>
  </div>
)

export default Contact
