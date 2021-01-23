import React from 'react'
import ProjectCard from '../components/ProjectCard'
import M_I_Converter_API from '../assets/JPEG/M_I_CONVERTER_API.jpg'

const ProjectMIConverter = () => (
  <ProjectCard
    image={M_I_Converter_API}
    title='M/I Unit Converter API'
    link='http://m-i-converter.herokuapp.com/'
    description='Unit Converter REST API'
    linkDesc='Project Website'
  />
)

export default ProjectMIConverter
