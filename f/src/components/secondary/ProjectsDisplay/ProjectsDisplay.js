import React from 'react'
import "./ProjectsDisplay.css"
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsDisplay() {
  return (
      <div className='project-display-container'>
        <h1>Projects</h1>
        <ProjectCard src="/images/genetic.png" title="genetic algo" entry="I did some shit"/>
        <ProjectCard src="/images/genetic.png" title="genetic algo" entry="I did some shit"/>
      </div>

  )
}

export default ProjectsDisplay