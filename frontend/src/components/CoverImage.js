import React from 'react'

const CoverImage = ({ image, backgroundColor, children, style, id }) => {
  const styles = {
    backgroundColor: '#1f2122',
    background: `${backgroundColor},url(${image}) no-repeat center center fixed`,
    filter: `progid:DXImageTransform.Microsoft.AlphaImageLoader(src=${image}, sizingMethod='1')`,
    backgroundSize: 'cover',
    backgroundOrigin: 'content-box',
    width: '100%',
    minHeight: '100vh',
    ...style,
  }
  return (
    <section className='cover-image' id={id} style={styles}>
      {children}
    </section>
  )
}

export default CoverImage
