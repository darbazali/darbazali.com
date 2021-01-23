import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, image, link, description, linkDesc }) => {
  return (
    <div className='project'>
      {/\b(http|https)/.test(link) ? (
        <a href={link} rel='noreferrer' target='_blank'>
          <img src={image} alt={title} width='768' height='480' />
          <div className='project-content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{linkDesc}</p>
          </div>
        </a>
      ) : (
        <Link to={link}>
          <img src={image} alt={title} width='768' height='480' />
          <div className='project-content'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{linkDesc}</p>
          </div>
        </Link>
      )}
    </div>
  )
}

export default ProjectCard
