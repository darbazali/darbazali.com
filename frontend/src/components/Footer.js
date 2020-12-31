import React from 'react'
import { Link } from 'react-router-dom'
import FlexContainer from './FlexContainer'

import { Github, Linkedin } from '@icons-pack/react-simple-icons'

const footerStyle = {
  width: '100%',
  height: '160px',
  background: '#ebebeb',
  padding: '50px 0',
}

const Footer = () => (
  <footer style={footerStyle}>
    <FlexContainer
      container
      alignItems='center'
      justifyContent='space-between'
      alignContent='center'
      flexWrap='nowrap'
      maxWidth='1240px'
      margin='0 auto'
      padding='10px 0'
      className='footer'
    >
      <div>
        {/* <Link to='/#contact'>Contact</Link> */}
        <Link to='/resume'>Resume</Link>
      </div>
      <p>© 2020 - Darbaz Ali</p>

      <div className='socials'>
        <a href='https://github.com/DarbazAli'>
          <Github size={44} fill='#697285' />
        </a>
        <a href='https://www.linkedin.com/in/darbaz/'>
          <Linkedin size={44} fill='#697285' />
        </a>
      </div>
    </FlexContainer>
  </footer>
)

export default Footer
