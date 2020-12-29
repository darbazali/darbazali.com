import React from 'react'
import { Link } from 'react-router-dom'

import qcImage from '../assets/quad_ captcha_thumbnail.png'
import bit8UrlImage from '../assets/8bit_url_thumbnail.png'
import usGDPImage from '../assets/us_gdp_thumbnail.png'
import hikeWithMe from '../assets/hike_with_me_thumbnail.png'

import FlexContainer from '../components/FlexContainer'

/* 
===================================================
DATA
===================================================
*/
const projects = [
  {
    id: 1,
    title: 'Hike With Me',
    desc: 'UX/UI Design',
    image: hikeWithMe,
    route: '/hike_with_me',
  },
  {
    id: 2,
    title: 'QUAD CAPTCHA',
    desc: 'CAPTCHA, API, UX/UI Design',
    image: qcImage,
    route: '/quad_captcha',
  },
  {
    id: 3,
    title: '8bit URL Shortenr',
    desc: 'API',
    image: bit8UrlImage,
    route: '/8bit_url',
  },
  {
    id: 4,
    title: 'United States GDP',
    desc: 'Data Visualization',
    image: usGDPImage,
    route: '/us_gdp',
  },
]

/* 
===================================================
STYLES
===================================================
*/
const cardStyle = {
  width: 'calc(50% - 8px)',
  backgroundColor: '#f4f5f6',
  textAlign: 'center',
  marginBottom: '1em',
}

const imageStyle = {
  width: '80%',
  margin: '2em auto',
}

/* 
===================================================
COMPONENT
===================================================
*/
const Projects = () => {
  return (
    <section>
      <h5 className='section-title'>featured projects</h5>
      <FlexContainer
        container
        alignItems='stretch'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </FlexContainer>
    </section>
  )
}

const ProjectCard = ({ project: { route, title, image, desc } }) => {
  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <p>{desc}</p>
      <Link to={route} className='button-tritary'>
        learn more
      </Link>
      <br />
      <img style={imageStyle} src={image} alt={title} />
    </div>
  )
}

export default Projects
