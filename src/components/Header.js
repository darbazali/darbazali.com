import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import logo from '../assets/ICON/DARBAZ_ALI_LOGO.svg'

const Header = ({ onToggle, opacity, top }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    // disable scrolling
    if (click) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'visible'
    }
  }, [click])

  return (
    <header
      className={click ? 'header open' : 'header'}
      style={{ opacity: opacity, top: top }}
    >
      <div
        className={
          click
            ? 'overlay fade-in hide-for-desktop'
            : 'overlay fade-out hide-for-desktop'
        }
        onClick={closeMobileMenu}
      ></div>

      <nav className='container flex flex-jc-sb flex-ai-c'>
        <a href='/' className='header__logo'>
          <img src={logo} alt='Darbaz Ali' />
        </a>

        <Link
          to=''
          className='header__toggle hide-for-desktop'
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </Link>

        <div className='header__links hide-for-mobile'>
          <Link to='/' onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link to='/about' onClick={closeMobileMenu}>
            About
          </Link>
          <Link to='/' onClick={closeMobileMenu}>
            Resume
          </Link>
        </div>

        <ContactButton
          onClick={() => {
            closeMobileMenu()
            onToggle()
          }}
        />
      </nav>

      <MobileMenu open={click} onClick={[closeMobileMenu, onToggle]} />
    </header>
  )
}

const MobileMenu = ({ open, onClick }) => {
  const [closeMobileMenu, onToggle] = onClick
  return (
    <div
      className={
        open
          ? 'mobile__menu fade-in container hide-for-desktop'
          : 'mobile__menu fade-out container hide-for-desktop'
      }
    >
      <Link to='/projects' onClick={onClick} className='mobile-link'>
        Projects
      </Link>
      <Link to='/about' onClick={onClick} className='mobile-link'>
        About
      </Link>
      <Link to='/resume' onClick={onClick} className='mobile-link'>
        Resume
      </Link>
      <ContactButton
        onClick={() => {
          closeMobileMenu()
          onToggle()
        }}
        className='mobile-link'
      />
    </div>
  )
}

const ContactButton = ({ onClick, className }) => (
  <button
    className={`${className} button header__cta hide-for-mobile`}
    onClick={onClick}
  >
    Contact
  </button>
)

export default Header
