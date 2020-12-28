import React from 'react'
import AboutSection from '../sections/AboutSection'
import SkillSet from '../sections/SkillSet'
import { Certifications } from '../sections/Certifications'
import Tools from '../sections/Tools'

import UX_CERT from '../assets/CERT/UX_DESIGN_CERT.jpg'
import API_CERT from '../assets/CERT/API_MICROSERVICE_CERT.jpg'
import DATA_VIS_CERT from '../assets/CERT/DATA_VISUALIZATION_CERT.jpg'
import FRONT_END_CERT from '../assets/CERT/FRONT-END_LIBRARIES_CERT.jpg'
import JS_ALGO_CERT from '../assets/CERT/FCC_JS_Algorithms_And_Data_Structures_Certification.jpg'
import RESPONSIVE_WEB_CERT from '../assets/CERT/RESPONSIVE_DESIGN_CERT.jpg'

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

const About = () => {
  return (
    <>
      <div className='container'>
        <AboutSection />
      </div>
      <SkillSet />
      <div className='container'>
        <Certifications list={certData} title='Certifications' />
        <Tools />
      </div>
    </>
  )
}

export default About
