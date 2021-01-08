import React from 'react'

const CoverImage = ({ image, backgroundColor, children, style, id }) => {
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
    minHeight: '100vh',
    ...style,
  }
  return (
    <section id={id} style={styles}>
      {children}
    </section>
  )
}

export default CoverImage
