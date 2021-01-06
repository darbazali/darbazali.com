import React from 'react'

const CoverImage = ({ image, backgroundColor, children, style }) => {
  const styles = {
    background: `
          ${backgroundColor},
          url(${image})`,
    backgroundColor: '#1f2122',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundOrigin: 'content-box',

    width: '100%',
    height: '100vh',
    ...style,
  }
  return <section style={styles}>{children}</section>
}

export default CoverImage
