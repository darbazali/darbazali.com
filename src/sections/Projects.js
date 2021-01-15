import React from 'react'
import ProjectCard from '../components/ProjectCard'

import hwmImage from '../assets/JPEG/HWM.jpg'
import qcImage from '../assets/JPEG/QC_MOCKUP.jpg'
import bit8Url from '../assets/JPEG/8BIT_URL.jpg'
import heatMapD3 from '../assets/JPEG/HEAT_MAP_D3.jpg'
import M_I_Converter_API from '../assets/JPEG/M-I-CONVERTER-API.jpg'
import pomodoroClock from '../assets/JPEG/POMODORO_CLOCK.jpg'
/* 
===================================================
COMPONENT
===================================================
*/
const Projects = () => (
  <>
    <ProjectCard
      image={qcImage}
      title='QUAD CAPTCHA'
      subtitle='Gamified Bot Detector'
      link='/quad-captcha'
      cta_label='Read the case study'
    />

    <ProjectCard
      image={hwmImage}
      title='Hike With Me'
      subtitle='UX/UI Design'
      link='/hike-with-me'
      cta_label='Read the case study'
    />

    <ProjectCard
      image={bit8Url}
      title='8bit-URL Shortener'
      subtitle='URL Shortener API, MERN Stack'
      link='https://bit8-url.herokuapp.com'
      cta_label='Visit the app'
    />
    <ProjectCard
      image={M_I_Converter_API}
      title='Metric/Imperial Converter API'
      subtitle='Unit Converter API with Node.js'
      link='http://m-i-converter.herokuapp.com/'
      cta_label='Visit the app'
    />
    <ProjectCard
      image={pomodoroClock}
      title='Pomodoro Clock'
      subtitle='Pomodoro Clock app with React'
      link='https://codepen.io/Darbaz/pen/KKVQXPj'
      cta_label='Visit the app'
    />

    <ProjectCard
      image={heatMapD3}
      title='Monthly Global Land-Surface Temperature'
      subtitle='Data Visualization with D3'
      link='https://codepen.io/Darbaz/pen/bGEyLPQ'
      cta_label='Visit the app'
    />
  </>
)

export default Projects
