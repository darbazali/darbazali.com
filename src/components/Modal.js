import React, { useEffect } from 'react'
import Button from './Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'

const checkIcon = <FontAwesomeIcon icon={faCheckCircle} />
const warningIcon = <FontAwesomeIcon icon={faExclamationCircle} />

const Modal = ({ onRequestClose, error }) => {
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
        {error ? (
          <h5 style={{ color: '#E35F5F' }}>
            {warningIcon} Sorry, sending message faild
          </h5>
        ) : (
          <h5 className='modal__title' style={{ color: '#1BB946' }}>
            {checkIcon} Message sent successfully!
          </h5>
        )}

        <hr />
        {error ? (
          <p>{error}</p>
        ) : (
          <p>Thank you for contacting me, I'll be in tcouch asap.</p>
        )}

        <Button type='button' onClick={onRequestClose}>
          Close
        </Button>
      </div>
    </div>
  )
}

export default Modal
