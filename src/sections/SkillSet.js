import React from 'react'
import FlexContainer from '../components/FlexContainer'

const SkillSet = () => {
  return (
    <section style={{ margin: '6em auto' }}>
      <h4 className='section-title'>Skill Set</h4>
      <FlexContainer
        container
        className='container skills'
        alignItems='center'
        justifyContent='center'
        alignContent='center'
        flexWrap='wrap'
        maxWidth='1028px'
        margin='2em auto'
        marginRight='-16px'
      >
        <ul>
          <li>Front-End Systems</li>
          <li>Server-Side Scripting</li>
          <li>APIs and Microservices</li>
          <li>Object-oriented Programming </li>
          <li>Functional Programming</li>
          <li>Responsive Web Design</li>
          <li>BDD Development</li>
          <li>UNIX Command Line</li>
          <li>Version Control Systems</li>
        </ul>

        <ul>
          <li>Data Visualization </li>
          <li>Quality Assurance </li>
          <li>SQL, noSQL</li>
          <li>UI/UX Design</li>
          <li>Visual Design</li>
          <li>Design Strategy </li>
          <li>Design Thinking</li>
          <li>Prototyping </li>
          <li>User Research</li>
        </ul>
      </FlexContainer>
    </section>
  )
}

export default SkillSet
