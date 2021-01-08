import React, { useState } from 'react'
import FlexContainer from './FlexContainer'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/darbaz_logo.png'
import { ReactComponent as CloseIcon } from '../assets/ICON/close-icon.svg'
import { ReactComponent as MenuIcon } from '../assets/ICON/hamburger-menu.svg'
import '../styles/header.css'

const buttonStyle = {
  width: '106px',
  height: '40px',
  borderRadius: '20px',
  background: 'transparent',
  border: '1px solid #ffffff',
  color: '#ffffff',
  cursor: 'pointer',
  outline: 'none',
  fontWeight: '400',
  transition: 'all 300ms ease-out',
}

const Header = ({ opacity, top }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header style={{ opacity: opacity, top: top }}>
      <FlexContainer
        container
        alignItems='center'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='nowrap'
        maxWidth='1240px'
        margin='0 auto'
      >
        {/* LOGO */}
        <Link to='/' className='logo'>
          <img style={{ height: '32px' }} src={logo} alt='Darbaz Ali logo' />
        </Link>

        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <HashLink
              onClick={closeMobileMenu}
              to='/#hero'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Home
            </HashLink>
            <HashLink
              onClick={closeMobileMenu}
              to='/#services'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Services
            </HashLink>
            <Link onClick={closeMobileMenu} to='/projects'>
              Projects
            </Link>
            <Link onClick={closeMobileMenu} to='/about'>
              About
            </Link>
          </ul>
          <ContactButton onClick={closeMobileMenu} />
        </nav>

        <div className='mobile-menu' onClick={handleClick}>
          {click ? (
            <CloseIcon className='menu-icon' />
          ) : (
            <MenuIcon className='menu-icon' />
          )}
        </div>
      </FlexContainer>
    </header>
  )
}

const ContactButton = ({ onClick }) => (
  <HashLink
    to='/#contact'
    scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
  >
    <button onClick={onClick} style={buttonStyle} className='button-secondary'>
      Contact
    </button>
  </HashLink>
)

export default Header
