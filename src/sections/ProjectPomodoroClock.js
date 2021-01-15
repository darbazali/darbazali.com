import React from 'react'
import ProjectCard from '../components/ProjectCard'
import pomodoroClock from '../assets/JPEG/POMODORO_CLOCK.jpg'
const ProjectPomodoroClock = () => {
  return (
    <>
      <ProjectCard
        image={pomodoroClock}
        title='Pomodoro Clock'
        subtitle='Pomodoro Clock app with React'
        link='https://codepen.io/Darbaz/pen/KKVQXPj'
        cta_label='Visit the app'
      />
    </>
  )
}

export default ProjectPomodoroClock
