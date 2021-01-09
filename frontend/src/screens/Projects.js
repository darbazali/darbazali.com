import React, { useState } from 'react'
import { SegmentedControl } from 'segmented-control-react'

import { CertCard } from '../sections/Certifications'
import FlexContainer from '../components/FlexContainer'

const projects = [
  {
    id: 1,
    title: 'Hike With Me',
    desc: 'UX/UI Design',
    category: 'ui/ux',
    url: '/hike-with-me',
    image: 'https://i.ibb.co/VSPk1rP/HWM-HERO-IMG.jpg',
  },
  {
    id: 2,
    title: 'QUAD CAPTCHA',
    desc: 'CAPTCHA, API, UX/UI Design',
    category: 'vanilla',
    url: '/quad-captcha',
    image: 'https://i.ibb.co/CmyXjRb/QUAD-CAPTCHA.jpg',
  },
  {
    id: 3,
    title: '8bit URL Shortenr',
    desc: 'API',
    category: 'node',
    url: 'https://bit8-url.herokuapp.com',
    image: 'https://i.ibb.co/Sm4XVbf/url-shortener-api.jpg',
  },
  {
    id: 4,
    title: 'Metric/Imperial Converter API',
    desc: 'API',
    category: 'node',
    url: 'https://m-i-converter.herokuapp.com',
    image: 'https://i.ibb.co/mCDNLqN/m-i-converter-api.jpg',
  },
  {
    id: 44,
    title: 'Treemap Diagram with D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/VweJxMg',
    image: 'https://i.ibb.co/7X1Qn58/d3-treemap.jpg',
  },
  {
    id: 5,
    title: 'Choropleth Map With D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/rNxEarv',
    image: 'https://i.ibb.co/fDbktJG/d3-choropleth-map.jpg',
  },
  {
    id: 6,
    title: 'Heat Map Chart with D3',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/bGEyLPQ',
    image: 'https://i.ibb.co/q90PWKg/d3-heatmap.jpg',
  },
  {
    id: 7,
    title: 'United States GDP',
    desc: 'Data Visualization',
    category: 'd3',
    url: 'https://codepen.io/Darbaz/pen/XWXQryj',
    image: 'https://i.ibb.co/rvCJM8h/d3-barchart.jpg',
  },

  {
    id: 8,
    title: 'Pomodoro Clock',
    desc: 'React',
    category: 'react',
    url: 'https://codepen.io/Darbaz/pen/KKVQXPj',
    image: 'https://i.ibb.co/7k4FbCF/pomodoro-clock.jpg',
  },
  {
    id: 9,
    title: 'Random Quote Machine',
    desc: 'React',
    category: 'react',
    url: 'https://github.com/DarbazAli/random-quote-machine',
    image: 'https://i.ibb.co/XjYPCjc/random-quote-machine.jpg',
  },
  {
    id: 10,
    title: 'Hacker News API',
    desc: 'React',
    category: 'react',
    url: 'https://hacker-stories-react-api.web.app',
    image: 'https://i.ibb.co/7pQ719n/hacker-news-api.jpg',
  },
  {
    id: 11,
    title: 'iMarker',
    desc: 'React',
    category: 'react',
    url: 'https://github.com/DarbazAli/iMarker',
    image: 'https://i.ibb.co/6DVcXFY/iMarker.jpg',
  },
  {
    id: 12,
    title: 'Drumpad Machine',
    desc: 'React',
    category: 'react',
    url: 'https://codepen.io/Darbaz/pen/WNrEJxe',
    image: 'https://i.ibb.co/54C4KfR/drum-machine.jpg',
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

const segmentStyle = {
  width: '60%',
  maxWidth: 'none',
  margin: '1em auto',
  marginBottom: '3em',
  textAlign: 'center',
}

const Projects = () => {
  const [segments, setSegments] = useState(segmentList)
  const [segment, setSegment] = useState('All')
  const [selected, setSelected] = useState(0)
  const [filterd, setFilterd] = useState(false)

  const handleChange = (index) => {
    const seg = segments[index].name
    setSegment(seg)
    if (seg === 'All') setFilterd(false)
    else setFilterd(true)
  }

  const filterdList = projects.filter(
    (p) => p.category.toLowerCase() === segment.toLowerCase()
  )
  return (
    <section className='container' style={{ paddingTop: '150px' }}>
      <h5 className='section-title'>Projects</h5>

      <div style={segmentStyle} className='segments'>
        <p>Filter</p>
        <SegmentedControl
          segments={segments}
          selected={selected}
          variant='dark'
          onChangeSegment={handleChange}
        />
      </div>

      <FlexContainer
        container
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        flexWrap='wrap'
      >
        {filterd
          ? filterdList.map((project) => (
              <CertCard key={project.id} cert={project} />
            ))
          : projects.map((project) => (
              <CertCard key={project.id} cert={project} />
            ))}
      </FlexContainer>
    </section>
  )
}

export default Projects
