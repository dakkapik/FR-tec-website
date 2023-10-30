import React from 'react'
import "./ProjectsDisplay.css"
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsDisplay() {
  return (
      <div className='project-display-container'>
        <h1>Projects</h1>
        <ProjectCard src="/images/genetic.png" title="genetic algo" entry="entries here coming soon"/>
        <ProjectCard src="/images/genetic.png" title="genetic algo" entry="entries here coming soon"/>
      </div>

  )
}

export default ProjectsDisplay