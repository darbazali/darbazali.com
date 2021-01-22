import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className='project'>
      {/\b(http|https)/.test(link) ? (
        <a href={link} rel='noreferrer' target='_blank'>
          <img src={image} alt={title} width='680' height='426' />
        </a>
      ) : (
        <Link to={link}>
          <img src={image} alt={title} width='680' height='426' />
        </Link>
      )}
    </div>
  )
}

export default ProjectCard
