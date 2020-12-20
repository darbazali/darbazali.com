import React from 'react'
import { Link } from 'react-router-dom'

import qcImage from '../assets/quad_ captcha_thumbnail.png'
import bit8UrlImage from '../assets/8bit_url_thumbnail.png'
import usGDPImage from '../assets/us_gdp_thumbnail.png'
import hwmImage from '../assets/hike_with_me_thumbnail.png'
import '../styles/projects.css'

const projects = [
  {
    id: 1,
    title: 'Hike With Me',
    desc: 'UX/UI Design',
    image: hwmImage,
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

const Projects = () => {
  return (
    <section className='center-align'>
      <p className='section-title'>featured projects</p>
      <div className='projects'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link to='/projects' className='button-tritary'>
        {' '}
        See more{' '}
      </Link>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <Link to={project.route}>
      <div className='project-card'>
        <img src={project.image} alt={project.title} />
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
      </div>
    </Link>
  )
}

export default Projects
