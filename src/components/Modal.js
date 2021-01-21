import React, { useEffect } from 'react'
import { Github, Linkedin } from '@icons-pack/react-simple-icons'
// import { motion, AnimatePresence } from 'framer-motion'
// import Button from './Button'

import CloseIcon from '../assets/ICON/close-icon.svg'

const Modal = ({ onRequestClose, isVisible }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose()
      }
    }

    // Prevent scolling
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible'
      document.removeEventListener('keydown', onKeyDown)
    }
  })

  return (
    // <AnimatePresence>
    //   {isVisible && (
    <div
      className='modal__backdrop'
      // initial={{ scale: 1 }}
      // animate={{ scale: 1.05 }}
      // exit={{ scale: 1 }}
      // transition={{ duration: 0.5 }}
    >
      <div className='modal__container'>
        <button
          onClick={onRequestClose}
          style={{
            float: 'right',
            margin: '1em 1em 0 0',
            background: '#fff',
            border: 'none',
            outline: 'none',
            cursor: 'pointer',
            display: 'block',
            clear: 'both',
          }}
        >
          <img src={CloseIcon} alt='Close' />
        </button>
        <br />
        <h3 style={{ marginTop: '1em', textAlign: 'center' }}>Get in touch</h3>
        <p style={{ maxWidth: '545px', margin: '1em auto' }}>
          Whether you have a product/service problem, or just wanna say hi ,
          feel free to shoot me an email, and I will be in touch asap.
        </p>
        <a href='mailto:darbaz.me@gmail.com'>
          {/* <Button>Shoot me an email</Button> */}
        </a>

        <div className='modal-footer'>
          <Socials />
        </div>
      </div>
    </div>

    // </AnimatePresence>
  )
}

const Socials = () => (
  <div className='socials'>
    <a href='https://github.com/DarbazAli'>
      <Github size={54} fill='#1f2122' />
      <p>
        <b> Github</b>
        <br />
        /DarbazAli
      </p>
    </a>
    <a href='https://www.linkedin.com/in/darbaz/'>
      <Linkedin size={54} fill='#1f2122' />
      <p>
        <b> Linkedin</b>
        <br />
        /darbaz
      </p>
    </a>
  </div>
)

export default Modal
