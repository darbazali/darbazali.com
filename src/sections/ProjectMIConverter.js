import React from 'react'
import ProjectCard from '../components/ProjectCard'
import M_I_Converter_API from '../assets/JPEG/M-I-CONVERTER-API.jpg'

const ProjectMIConverter = () => {
  return (
    <>
      <ProjectCard
        image={M_I_Converter_API}
        title='Metric/Imperial Converter API'
        subtitle='Unit Converter API with Node.js'
        link='http://m-i-converter.herokuapp.com/'
        cta_label='Visit the app'
      />
    </>
  )
}

export default ProjectMIConverter
