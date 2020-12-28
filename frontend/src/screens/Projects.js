import React, { useState } from 'react'
import { SegmentedControl } from 'segmented-control-react'

import { CertCard } from '../sections/Certifications'
import FlexContainer from '../components/FlexContainer'

import d3BarChart from '../assets/D3/d3_barchart.jpg'
import d3ChoroplethMap from '../assets/D3/d3_choropleth_map.jpg'
import d3HeatMap from '../assets/D3/d3_heatmap.jpg'
import d3TreeMap from '../assets/D3/d3_treemap.jpg'

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
    title: 'Treemap Diagram with D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/VweJxMg',
    image: d3TreeMap,
  },
  {
    id: 5,
    title: 'Choropleth Map With D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/rNxEarv',
    image: d3ChoroplethMap,
  },
  {
    id: 6,
    title: 'Heat Map Chart with D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/bGEyLPQ',
    image: d3HeatMap,
  },
  {
    id: 7,
    title: 'United States GDP',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/XWXQryj',
    image: d3BarChart,
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
      <h3 className='section-titile'>Projects</h3>
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

      <FlexContainer
        container
        alignItems='center'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
      >
        {filterdList.map((project) => (
          <CertCard key={project.id} cert={project} />
        ))}
      </FlexContainer>
    </section>
  )
}

const ProjectCard = ({ project: { title, desc, category, image } }) => (
  <div>
    <h5>{title}</h5>
    <p>{desc}</p>
    <b>{category}</b>
    <img src={image} alt={title} />
  </div>
)

export default Projects
