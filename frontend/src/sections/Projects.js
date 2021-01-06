import React from 'react'
import { Link } from 'react-router-dom'

import hwmImage from '../assets/HWM.png'

/* 
===================================================
COMPONENT
===================================================
*/
const Projects = () => (
  <>
    <ProjectRightImage
      src={hwmImage}
      title='Hike With Me'
      subtitle='UX/UI Design'
      link='/hike-with-me'
    />
  </>
)

const ProjectRightImage = ({ title, image, subtitle, link }) => {
  return (
    <section>
      <img src={image} alt={title} />
      <div className='project-content'>
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link to={link}>Learn more</Link>
      </div>
    </section>
  )
}

export default Projects
