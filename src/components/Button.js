import React from 'react'

const buttonStyle = {
  padding: '16px 32px',
  borderRadius: '8px',
  backgroundColor: '#a988f2',
  boxShadow: `
  0 1.8px 0.8px rgba(169, 136, 242, 0.02),
  0 4.3px 2.8px rgba(169, 136, 242, 0.032),
  0 8.1px 6.9px rgba(169, 136, 242, 0.041),
  0 14.5px 16.2px rgba(169, 136, 242, 0.2)`,
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '30px',
  textAlign: 'center',
  color: '#fff',
  textShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
  marginTop: '20px',
  transition: 'all 300ms ease-out',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
}

const Button = ({ children, type, onClick }) => (
  <button
    type={type}
    style={buttonStyle}
    className='button button-primary'
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
