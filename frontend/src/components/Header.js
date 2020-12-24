import React from 'react'
import FlexContainer from './FlexContainer'
import { Link } from 'react-router-dom'
import logo from '../assets/darbaz_logo.png'

const headerStyle = {
  width: '100%',
  height: '64px',
  padding: '12px 0',
  backgroundColor: '#f4f5f6',
  position: 'fixed',
  top: '0',
  opacity: '0.98',
  zIndex: '9999',
}

const navStyle = {
  width: '390px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '50px',
}

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
  return (
    <header style={headerStyle}>
      <FlexContainer
        container
        alignItems='center'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
        maxWidth='1240px'
        margin='0 auto'
      >
        <Link
          to='/'
          style={{
            borderRadius: '10px',
            height: '40px',
            width: '40px',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.09)',
          }}
        >
          <img style={{ height: '40px' }} src={logo} alt='Darbaz Ali logo' />
        </Link>

        <nav style={navStyle}>
          <Link to='/'>Home</Link>
          <Link to='/#services'>Services</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/about'>About</Link>
        </nav>

        <ContactButton />
      </FlexContainer>
    </header>
  )
}

const ContactButton = () => (
  <Link to='/#contact'>
    <button style={buttonStyle} className='button-secondary'>
      Contact
    </button>
  </Link>
)

export default Header
