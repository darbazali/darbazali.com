import React from 'react'
import ProjectCard from '../components/ProjectCard'
import bit8Url from '../assets/JPEG/8BIT_URL.jpg'

const ProjectURLShortener = () => (
  <ProjectCard
    image={bit8Url}
    title='8bit-URL Shortener'
    link='https://bit8-url.herokuapp.com'
    description='URL Shortener App'
    linkDesc='Project Website'
  />
)

export default ProjectURLShortener
