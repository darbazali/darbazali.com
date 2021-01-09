import React from 'react'
import FlexContainer from '../components/FlexContainer'

const styles = {}

const listStyle = {
  padding: '0',
  listStyleType: 'none',
  fontWeight: '500',
  textAlign: 'left',
  marginBottom: '2em',
}

const SkillSet = () => {
  return (
    <section style={styles}>
      <h5 className='section-title'>Skill Set</h5>
      <FlexContainer
        className='skills container'
        container
        alignItems='stretch'
        justifyContent='space-between'
        alignContent='center'
        flexWrap='nowrap'
        padding='1em'
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
