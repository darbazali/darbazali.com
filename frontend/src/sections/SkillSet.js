import React from 'react'
import FlexContainer from '../components/FlexContainer'

const styles = {
  padding: '40px',
}

const listStyle = {
  padding: '0',
  listStyleType: 'none',
  fontSize: '1.250em',
  fontWeight: '500',
  lineHeight: '40px',
  textAlign: 'left',
  color: '#000',
}

const SkillSet = () => {
  return (
    <section style={styles}>
      <h5 className='section-title' style={{ color: '#000' }}>
        Skill Set
      </h5>
      <FlexContainer
        className='skills'
        container
        alignItems='stretch'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='wrap'
        padding='60px'
      >
        <ul style={listStyle}>
          <li>Front-End Systems</li>
          <li>Server-Side Scripting</li>
          <li>APIs and Microservices</li>
          <li>Object-oriented Programming </li>
          <li>Functional Programming</li>
          <li>Responsive Web Design</li>
        </ul>

        <ul style={listStyle}>
          <li>UI/UX Design</li>
          <li>Visual Design</li>
          <li>Design Strategy </li>
          <li>Design Thinking</li>
          <li>Prototyping </li>
          <li>User Research</li>
        </ul>

        <ul style={listStyle}>
          <li>Data Visualization </li>
          <li>Quality Assurance </li>
          <li>SQL, noSQL</li>
          <li>BDD Development</li>
          <li>UNIX Command Line</li>
          <li>Version Control Systems</li>
        </ul>
      </FlexContainer>
    </section>
  )
}

export default SkillSet
