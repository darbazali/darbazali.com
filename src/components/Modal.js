import React, { useEffect } from 'react'
import Button from './Button'

const Modal = ({ onRequestClose }) => {
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
    <div className='modal__backdrop'>
      <div className='modal__container'>
        <h2>Get in touch</h2>
        <p>
          Whether you have a product/service problem, or just wanna say hi ,
          feel free to shoot me an email, and I will be in touch asap.
        </p>
        <Button type='button' onClick={onRequestClose}>
          Close
        </Button>

        <div className='modal-footer'></div>
      </div>
    </div>
  )
}

export default Modal
