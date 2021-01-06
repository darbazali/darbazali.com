import React from 'react'

const CoverImage = ({ image, backgroundColor, children, style }) => {
  const styles = {
    background: `
          ${backgroundColor},
          url(${image})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',

    width: '100%',
    height: '100vh',
    ...style,
  }
  return <section style={styles}>{children}</section>
}

export default CoverImage
