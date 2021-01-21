import React from 'react'

const footerStyle = {
  width: '100%',
  height: '100px',
  background: 'transparent',
  padding: '20px 0',
  margin: '0 auto',
  marginTop: '50px',
  textAlign: 'center',
  display: 'block',
  clear: 'both',
  opacity: '0.8',
}

const Footer = () => (
  <footer style={footerStyle}>© {new Date().getFullYear()} - Darbaz Ali</footer>
)

export default Footer
