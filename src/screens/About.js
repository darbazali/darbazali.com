import React from 'react'
import SkillSet from '../sections/SkillSet'
import AboutMe from '../sections/AboutMe'
import { Certifications } from '../sections/Certifications'
import Tools from '../sections/Tools'

const certData = [
  {
    id: 100,
    title: 'UX Design',
    provider: 'teamTreeHouse',
    url:
      'https://www.credential.net/f5096084-e541-46e2-aef0-e982545fcc2e#gs.ofnhtb',
    image: 'https://i.ibb.co/SngXf1Z/UX-DESIGN-CERT.jpg',
  },

  {
    id: 101,
    title: 'APIs and Microservices',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/apis-and-microservices',
    image: 'https://i.ibb.co/Dz7NHzH/API-MICROSERVICE-CERT.jpg',
  },
  {
    id: 102,
    title: 'Front End Libraries',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/front-end-libraries',
    image: 'https://i.ibb.co/zm2yxCn/FRONT-END-LIBRARIES-CERT.jpg',
  },
  {
    id: 103,
    title: 'Data Visualization',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/data-visualization',
    image: 'https://i.ibb.co/vmfxx4P/DATA-VISUALIZATION-CERT.jpg',
  },
  {
    id: 104,
    title: 'JavaScript Algorithms & Data Structures',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/javascript-algorithms-and-data-structures',
    image:
      'https://i.ibb.co/hR2QVjM/FCC-JS-Algorithms-And-Data-Structures-Certification.jpg',
  },
  {
    id: 105,
    title: 'Responsive Web Design',
    provider: 'freeCodeCamp',
    url:
      'https://www.freecodecamp.org/certification/darbaz-ali/responsive-web-design',
    image: 'https://i.ibb.co/LdsGMWs/RESPONSIVE-DESIGN-CERT.jpg',
  },
]

const About = () => {
  return (
    <>
      <AboutMe />
      <Certifications list={certData} title='Certifications' />
      <SkillSet />
      <Tools />
    </>
  )
}

export default About
