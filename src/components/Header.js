import React, { useState, useEffect } from 'react'
import FlexContainer from './FlexContainer'

import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/ICON/DARBAZ_ALI_LOGO.svg'
import { ReactComponent as CloseIcon } from '../assets/ICON/close-icon.svg'
import { ReactComponent as MenuIcon } from '../assets/ICON/hamburger-menu.svg'
import '../styles/header.css'

const buttonStyle = {
  width: '106px',
  height: '40px',
  borderRadius: '20px',
  background: 'transparent',
  border: '1px solid #a988f2',
  color: '#a988f2',
  cursor: 'pointer',
  outline: 'none',
  fontWeight: '500',
  transition: 'all 300ms ease-out',
}

const Header = ({ onToggle, opacity, top }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  useEffect(() => {}, [click])
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
          <img
            style={{
              height: '32px',
              width: '32px',
              opacity: '0.9',
              borderRadius: '5px',
            }}
            src={logo}
            alt='Darbaz Ali logo'
          />
        </Link>

        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <HashLink
              onClick={closeMobileMenu}
              to='/#services'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Services
            </HashLink>

            <HashLink
              onClick={closeMobileMenu}
              to='/#projects'
              scroll={(el) =>
                el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              Projects
            </HashLink>
            <Link onClick={closeMobileMenu} to='/about'>
              About
            </Link>
          </ul>
          <ContactButton onClick={onToggle} />
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
  <button onClick={onClick} style={buttonStyle} className='button-secondary'>
    Contact
  </button>
)

export default Header
