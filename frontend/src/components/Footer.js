import React from 'react'
import { Link } from 'react-router-dom'
import github from '../assets/github_logo.svg'
import linkedin from '../assets/linkedin_logo.svg'
import FlexContainer from './FlexContainer'

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
        <Link to='/#contact'>Contact</Link>
        <Link to='/resume'>Download Resume</Link>
      </div>
      <p>© 2020 - Darbaz Ali</p>

      <div className='socials'>
        <a href='https://github.com/DarbazAli'>
          <img src={github} alt='GitHub logo' />
        </a>

        <a href='https://www.linkedin.com/in/darbaz/'>
          <img src={linkedin} alt='Linkedin logo' />
        </a>
      </div>
    </FlexContainer>
  </footer>
)

export default Footer
