import React from 'react'

const footerStyle = {
  width: '100%',
  background: 'transparent',
  padding: '4rem 0 2rem 0',
  margin: '0 auto',
  textAlign: 'center',
  display: 'block',
  clear: 'both',
  opacity: '0.8',
}

const Footer = () => (
  <footer style={footerStyle}>© {new Date().getFullYear()} - Darbaz Ali</footer>
)

export default Footer
