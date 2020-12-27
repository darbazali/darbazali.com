import React, { useState } from 'react'
import FlexContainer from './FlexContainer'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import logo from '../assets/darbaz_logo.png'
import { ReactComponent as CloseIcon } from '../assets/ICON/noun_Close_2845885.svg'
import { ReactComponent as MenuIcon } from '../assets/ICON/noun_menu_1166835.svg'
import '../styles/header.css'

const buttonStyle = {
  width: '106px',
  height: '43px',
  borderRadius: '6px',
  background: 'transparent',
  border: '2px solid #f59182',
  color: '#f59182',
  cursor: 'pointer',
  outline: 'none',
  fontWeight: '500',
  transition: 'all 300ms ease-out',
}

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <header>
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
          <img style={{ height: '40px' }} src={logo} alt='Darbaz Ali logo' />
        </Link>

        <nav className={click ? 'navbar active' : 'navbar'}>
          <ul>
            <Link onClick={closeMobileMenu} to='/'>
              Home
            </Link>
            <HashLink onClick={closeMobileMenu} to='/#services'>
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
  <HashLink to='/#contact'>
    <button onClick={onClick} style={buttonStyle} className='button-secondary'>
      Contact
    </button>
  </HashLink>
)

export default Header
