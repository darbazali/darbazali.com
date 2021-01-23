import React from 'react'
import ProjectCard from '../components/ProjectCard'
import qcImage from '../assets/JPEG/QUAD_CAPTCHA.jpg'

const ProjectQuadCaptcha = () => (
  <ProjectCard
    image={qcImage}
    link='/quad-captcha'
    title='QUAD CAPTCHA'
    description='Bot Detector App'
    linkDesc='MVP Case Study'
  />
)

export default ProjectQuadCaptcha
