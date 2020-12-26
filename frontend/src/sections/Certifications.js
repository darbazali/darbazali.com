import React from 'react'
import lunchIcon from '../assets/ICON/ic_open_in_new_48px.svg'
import UX_CERT from '../assets/CERT/UX_DESIGN_CERT.jpg'
import API_CERT from '../assets/CERT/API_MICROSERVICE_CERT.jpg'
import DATA_VIS_CERT from '../assets/CERT/DATA_VISUALIZATION_CERT.jpg'
import FRONT_END_CERT from '../assets/CERT/FRONT-END_LIBRARIES_CERT.jpg'
import JS_ALGO_CERT from '../assets/CERT/FCC_JS_Algorithms_And_Data_Structures_Certification.jpg'
import RESPONSIVE_WEB_CERT from '../assets/CERT/RESPONSIVE_DESIGN_CERT.jpg'
import FlexContainer from '../components/FlexContainer'

const certData = [
  {
    id: 100,
    title: 'UX Design',
    provider: 'teamTreeHouse',
    url:
      'https://www.credential.net/f5096084-e541-46e2-aef0-e982545fcc2e#gs.ofnhtb',
    image: UX_CERT,
  },

  {
    id: 101,
    title: 'APIs and Microservices',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/apis-and-microservices',
    image: API_CERT,
  },
  {
    id: 101,
    title: 'Front End Libraries',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/front-end-libraries',
    image: FRONT_END_CERT,
  },
  {
    id: 101,
    title: 'Data Visualization',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/data-visualization',
    image: DATA_VIS_CERT,
  },
  {
    id: 101,
    title: 'JavaScript Algorithms & Data Structures',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/javascript-algorithms-and-data-structures',
    image: JS_ALGO_CERT,
  },
  {
    id: 101,
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/responsive-web-design',
    image: RESPONSIVE_WEB_CERT,
  },
]

const containerStyle = {
  width: '392px',
  marginBottom: '2em',
  height: '245px',
  borderRadius: '20px',
  boxShadow: '0px 6px 14px rgba(0, 0, 0, 0.08)',
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

const Certifications = () => {
  return (
    <section>
      <h5 className='section-title'>Certifications</h5>
      <FlexContainer
        container
        alignItems='center'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
      >
        {certData.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </FlexContainer>
    </section>
  )
}

const CertCard = ({ cert: { title, provider, url, image } }) => (
  <div className='certification-container' style={containerStyle}>
    <img
      className='certification-image'
      src={image}
      alt={title}
      style={imgStyle}
    />
    <div className='certification-card-content'>
      <div class='certification-overlay'>
        <div className='certification-text'>
          <b>{title}</b>
          <p>{provider}</p>
          <a href={url}>
            <img src={lunchIcon} alt={'Lunch Icon'} />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Certifications
