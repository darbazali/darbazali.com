import React from 'react'
import { Link } from 'react-router-dom'

import hwmImage from '../assets/HWM.png'
import qcImage from '../assets/QC_MOCKUP.png'
import bit8Url from '../assets/8BIT_URL.png'
import heatMapD3 from '../assets/HEAT_MAP_D3.png'

/* 
===================================================
COMPONENT
===================================================
*/
const Projects = () => (
  <>
    <ProjectRightImage
      className='content-up'
      direction='row'
      padding='0 4em'
      image={hwmImage}
      title='Hike With Me'
      subtitle='UX/UI Design'
      link='/hike-with-me'
    />
    <ProjectRightImage
      className='content-up'
      padding='0 2em'
      direction='row-reverse'
      image={qcImage}
      title='QUAD CAPTCHA'
      subtitle='Gamified Bot Detector'
      link='/hike-with-me'
    />

    <ProjectRightImage
      className='content-up'
      padding='0 4em'
      direction='row'
      image={bit8Url}
      title='8bit-URL Shortener'
      subtitle='URL Shortener API, MERN Stack'
      link='https://bit8-url.herokuapp.com'
    />
    <ProjectRightImage
      className='content-up'
      padding='0 2em'
      direction='row-reverse'
      image={heatMapD3}
      title='Monthly Global Temperature'
      subtitle='Data Visualization with D3'
      link='https://codepen.io/Darbaz/pen/bGEyLPQ'
    />
  </>
)

const ProjectRightImage = ({
  title,
  image,
  subtitle,
  link,
  direction,
  padding,
  className,
}) => {
  return (
    <section
      className={`featured-project ${className}`}
      style={{ flexDirection: direction }}
    >
      <div style={{ width: '50%' }}>
        <img src={image} alt={title} style={{ width: '100%' }} />
      </div>

      <div
        className='project-content'
        style={{ width: '50%', padding: padding }}
      >
        <h4 style={{ maxWidth: '340px', marginBottom: '20px' }}>{title}</h4>
        <p>{subtitle}</p>

        {/\b(http|https)/.test(link) ? (
          <a
            href={link}
            style={{
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Visit the app
          </a>
        ) : (
          <Link
            to={link}
            style={{
              fontWeight: '600',
              fontSize: '20px',
            }}
          >
            Learn more
          </Link>
        )}
      </div>
    </section>
  )
}

export default Projects
