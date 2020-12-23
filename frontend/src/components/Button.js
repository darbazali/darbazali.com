import React from 'react'

const buttonStyle = {
  padding: '16px 32px',
  borderRadius: '8px',
  backgroundColor: '#fcc230',
  boxShadow: '0px 8px 16px rgba(157, 119, 29, 0.34)',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
  color: '#fff',
  textShadow: '0px 3px 6px #a07d2a',
  marginTop: '20px',
  transition: 'all 300ms ease-out',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
}

const Button = ({ children, type, className }) => (
  <button type={type} style={buttonStyle} className={className}>
    {children}
  </button>
)

export default Button
