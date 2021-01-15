import React from 'react'
import ProjectCard from '../components/ProjectCard'

import heatMapD3 from '../assets/JPEG/HEAT_MAP_D3.jpg'
const ProjectHeatMap = () => {
  return (
    <>
      <ProjectCard
        image={heatMapD3}
        title='Monthly Global Land-Surface Temperature'
        subtitle='Data Visualization with D3'
        link='https://codepen.io/Darbaz/pen/bGEyLPQ'
        cta_label='Visit the app'
      />
    </>
  )
}

export default ProjectHeatMap
