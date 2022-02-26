import React from 'react'
import "./ProjectsDisplay.css"
import ProjectCard from '../ProjectCard/ProjectCard'

const prj = [{
    title: "Defiance",
    entry: "GREATEST OF ALL TIME",
    key: 1
},
{
    title: "Farm Friend",
    entry: "helping out farms",
    key: 2
},
{
  title: "Genetic Algorithm Pathfinding",
  entry: "A research project for Miami Dade College",
  src:'/images/genetic.png',
  key: 3
}
]

function ProjectsDisplay() {
  return (
      <div className='project-display-container'>
        <img className='project-display-background' alt='skyscraper background' src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"></img>
        {prj.map((description) => <ProjectCard props={description} key={description.key}/>)}
      </div>

  )
}

export default ProjectsDisplay