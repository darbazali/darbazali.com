import React from 'react'
import ProjectCard from '../components/ProjectCard'
import hwmImage from '../assets/JPEG/HWM.jpg'
const ProjectHikeWithMe = () => (
  <ProjectCard
    image={hwmImage}
    title='Hike With Me'
    link='/hike-with-me'
    description='Booking Hiking Events'
    linkDesc='UX/UI Design Case'
  />
)

export default ProjectHikeWithMe
