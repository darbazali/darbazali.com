import React from 'react'
import ProjectCard from '../components/ProjectCard'

import heatMapD3 from '../assets/JPEG/HEAT_MAP_D3.jpg'
const ProjectHeatMap = () => (
  <ProjectCard
    image={heatMapD3}
    title='Monthly Global Temperature'
    link='https://codepen.io/Darbaz/pen/bGEyLPQ'
    description='Data Visualization with D3'
  />
)

export default ProjectHeatMap
