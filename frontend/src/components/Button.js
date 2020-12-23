import React from 'react'

const buttonStyle = {
  padding: '16px 32px',
  borderRadius: '8px',
  backgroundColor: '#f59182',
  boxShadow: '0px 3px 6px rgba(186, 104, 92, 0.45)',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
  color: '#fff',
  textShadow: '0px 2px 5px rgba(0, 0, 0, 0.6)',
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