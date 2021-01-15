import React from 'react'
import ProjectCard from '../components/ProjectCard'
import hwmImage from '../assets/JPEG/HWM.jpg'
const ProjectHikeWithMe = () => {
  return (
    <>
      <ProjectCard
        image={hwmImage}
        title='Hike With Me'
        subtitle='UX/UI Design'
        link='/hike-with-me'
        cta_label='Read the case study'
      />
    </>
  )
}

export default ProjectHikeWithMe
