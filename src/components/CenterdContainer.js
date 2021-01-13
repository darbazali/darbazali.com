import React from 'react'

const styles = {
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
}
const CenterdContainer = ({ children }) => (
  <div style={styles}>{children || ''}</div>
)

export default CenterdContainer
