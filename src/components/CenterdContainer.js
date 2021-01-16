import React from 'react'

const styles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}
const CenterdContainer = ({ children, height, id }) => (
  <div id={id} style={{ ...styles, height: height }}>
    {children || ''}
  </div>
)

export default CenterdContainer
