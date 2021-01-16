import React from 'react'

const styles = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}
const CenterdContainer = ({ children, minHeight, id }) => (
  <div id={id} style={{ ...styles, minHeight: minHeight }}>
    {children || ''}
  </div>
)

export default CenterdContainer
