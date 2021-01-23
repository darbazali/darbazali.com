import React from 'react'
const styles = {
  width: '100vw',
  height: '90vh',
  position: 'relative',
}

const contentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center',
  fontWeight: '300',
}

const Fallback = () => {
  return (
    <section style={styles}>
      <div style={contentStyle}>
        <h3>Loading...</h3>
        <p>Please wait</p>
      </div>
    </section>
  )
}

export default Fallback
