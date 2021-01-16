import React from 'react'
import { Link } from 'react-router-dom'
import lunchIcon from '../assets/ICON/ic_open_in_new_48px.svg'
import FlexContainer from '../components/FlexContainer'

// const containerStyle = {
//   width: '31.8%',
//   marginBottom: '1em',
//   marginRight: '1em',
//   height: 'auto',
//   borderRadius: '20px',
//   filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))',
//   position: 'relative',
// }

// const imgStyle = {
//   opacity: '1',
//   display: 'block',
//   borderRadius: '20px',
//   width: '100%',
//   height: 'auto',
//   transition: 'all 300ms ease-in-out',
// }

const Certifications = ({ list, title }) => {
  return (
    <section>
      <h5 className='section-title'>{title}</h5>
      <FlexContainer
        container
        className='container'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        flexWrap='wrap'
        maxWidth='1028px'
        margin='2em auto'
        marginRight='-16px'
      >
        {list.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </FlexContainer>
    </section>
  )
}

const CertCard = ({ cert: { title, url, image } }) => (
  <a href={url} rel='noreferrer' target='_blank' className='cert-card'>
    <img src={image} alt={title} />
    <b>{title}</b>
  </a>
)

export { Certifications, CertCard }
