import React from 'react'
import ProjectCard from '../components/ProjectCard'
import bit8Url from '../assets/JPEG/8BIT_URL.jpg'

const ProjectURLShortener = () => {
  return (
    <>
      <ProjectCard
        image={bit8Url}
        title='8bit-URL Shortener'
        subtitle='URL Shortener API, MERN Stack'
        link='https://bit8-url.herokuapp.com'
        cta_label='Visit the app'
      />
    </>
  )
}

export default ProjectURLShortener
