import React from 'react'
import FlexContainer from '../components/FlexContainer'

const Certifications = ({ list, title }) => {
  return (
    <section style={{ marginBottom: '8em' }}>
      <h4 className='section-title'>{title}</h4>
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
