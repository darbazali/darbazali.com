import React from 'react'
import '../styles/contact.css'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
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
            placeholder='agent@station.com'
          ></textarea>
          <label htmlFor='message'>Message</label>
        </div>

        <button type='submit' className='button'>
          Send message
        </button>
      </form>

      <ContactMessage />
    </section>
  )
}

const ContactMessage = () => {
  return (
    <div>
      <h3>Contact</h3>
      <p>
        Whether you have a product/service problem, or just wanna say hi , feel
        free to shoot me an email, and I will be in touch asap.
      </p>
    </div>
  )
}

export default Contact
