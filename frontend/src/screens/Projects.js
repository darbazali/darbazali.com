import React, { useState } from 'react'
import { SegmentedControl } from 'segmented-control-react'

const projects = [
  {
    id: 1,
    title: 'Hike With Me',
    desc: 'UX/UI Design',
    category: 'ui/ux',
    route: '/hike_with_me',
  },
  {
    id: 2,
    title: 'QUAD CAPTCHA',
    desc: 'CAPTCHA, API, UX/UI Design',
    category: 'vanilla',
    route: '/quad_captcha',
  },
  {
    id: 3,
    title: '8bit URL Shortenr',
    desc: 'API',
    category: 'node',
    route: '/8bit_url',
  },
  {
    id: 4,
    title: 'United States GDP',
    desc: 'Data Visualization',
    category: 'd3',
    route: '/us_gdp',
  },
]

const segmentList = [
  { name: 'All' },
  { name: 'UI/UX' },
  { name: 'React' },
  { name: 'Node' },
  { name: 'D3' },
  { name: 'Vanilla' },
]

const styles = {
  fontSize: '20px',
}

const Projects = () => {
  const [segments, setSegments] = useState(segmentList)
  const [segment, setSegment] = useState('All')
  const [selected, setSelected] = useState(0)

  const handleChange = (index) => {
    const seg = segments[index].name
    setSegment(seg)
  }

  const filterdList = projects.filter(
    (p) => p.category.toLowerCase() === segment.toLowerCase()
  )
  return (
    <section className='container'>
      <h3>Projects</h3>
      <b>Filter by: {segment}</b>

      <div style={{ width: '60%' }} className='segments'>
        <SegmentedControl
          style={styles}
          segments={segments}
          selected={selected}
          variant='dark'
          onChangeSegment={handleChange}
        />
      </div>

      <div>
        {filterdList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

const ProjectCard = ({ project: { title, desc, category } }) => (
  <div>
    <h5>{title}</h5>
    <p>{desc}</p>
    <b>{category}</b>
  </div>
)

export default Projects
