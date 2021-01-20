import React from 'react'
import { Freecodecamp, Treehouse } from '@icons-pack/react-simple-icons'

const certData = [
  {
    id: 100,
    title: 'UX Design',
    provider: 'teamTreeHouse',
    url:
      'https://www.credential.net/f5096084-e541-46e2-aef0-e982545fcc2e#gs.ofnhtb',
  },

  {
    id: 101,
    title: 'APIs and Microservices',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/apis-and-microservices',
  },
  {
    id: 102,
    title: 'Front End Libraries',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/front-end-libraries',
  },
  {
    id: 103,
    title: 'Data Visualization',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/data-visualization',
  },
  {
    id: 104,
    title: 'JavaScript Algorithms & Data Structures',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/javascript-algorithms-and-data-structures',
  },
  {
    id: 105,
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/responsive-web-design',
  },
]

const Certifications = () => {
  return (
    <section>
      <h3 className='section-title'>Certifications</h3>
      <div className='container flex flex-jc-sb flex-fw-w'>
        {certData.map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </section>
  )
}

const CertCard = ({ cert: { provider, title, url, id } }) => (
  <div className='cert-card flex flex-ai-c'>
    <div style={{ marginRight: '1rem' }}>
      {id === 100 ? <Treehouse size={64} /> : <Freecodecamp size={64} />}
    </div>
    <div>
      <p>{provider}</p>
      <a href={url} rel='noreferrer' target='_blank'>
        {title}
      </a>
    </div>
  </div>
)

export default Certifications
