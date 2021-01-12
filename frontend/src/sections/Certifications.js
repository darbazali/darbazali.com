import React from 'react'
import { Link } from 'react-router-dom'
import lunchIcon from '../assets/ICON/ic_open_in_new_48px.svg'
import FlexContainer from '../components/FlexContainer'

const containerStyle = {
  width: '31.8%',
  marginBottom: '1em',
  marginRight: '1em',
  height: 'auto',
  borderRadius: '20px',
  filter: 'drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.15))',
  position: 'relative',
}

const imgStyle = {
  opacity: '1',
  display: 'block',
  borderRadius: '20px',
  width: '100%',
  height: 'auto',
  transition: 'all 300ms ease-in-out',
}

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
      >
        {list.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </FlexContainer>
    </section>
  )
}

const CertCard = ({ cert: { title, provider, url, image, desc } }) => (
  <div className='certification-container' style={containerStyle}>
    <img
      className='certification-image'
      src={image}
      alt={title}
      style={imgStyle}
    />
    <div className='certification-card-content'>
      <div className='certification-overlay'>
        <div className='certification-text'>
          <b>{title}</b>
          <p>{provider || desc}</p>

          {/\b(http|https)/.test(url) ? (
            <a href={url} rel='noreferrer' target='_blank'>
              <img src={lunchIcon} alt={'Lunch Icon'} />
            </a>
          ) : (
            <Link to={url}>
              <img src={lunchIcon} alt={'Lunch Icon'} />
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
)

export { Certifications, CertCard }
