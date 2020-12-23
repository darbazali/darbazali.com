import React from 'react'
import Button from '../components/Button'
import '../styles/contact.css'

import FlexContainer from '../components/FlexContainer'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <FlexContainer
        container
        alignItems='center'
        alignContent='center'
        justifyContent='space-around'
      >
        <ContactMessage />
        <form>
          <div className='field'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='agent@station.com'
            ></input>
            <label htmlFor='email'>Email</label>
          </div>

          <div className='field'>
            <input
              type='text'
              name='subject'
              id='subject'
              placeholder='Aliens are comming'
            ></input>
            <label htmlFor='subject'>Subject</label>
          </div>

          <div className='field'>
            <textarea
              name='message'
              id='message'
              placeholder='Prepare Raytheon MIM-23 HAWK for counter lunch!'
            ></textarea>
            <label htmlFor='message'>Message</label>
          </div>

          <Button className='button' type='submit'>
            Send message
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
