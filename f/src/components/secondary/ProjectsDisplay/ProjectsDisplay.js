import React, { useEffect, useState } from 'react'
import "./ProjectsDisplay.css"
import ProjectCard from '../ProjectCard/ProjectCard'

function ProjectsDisplay() {

  const [ projects, setProjects ] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/entries")
    .then((res) => res.json())
    .then((data) => setProjects(data))
    .catch((err) => console.error(err))
  }, [])
  
  return (
      <div className='project-display-container'>
        <img className='project-display-background' alt='skyscraper background' src="https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"></img>
        {projects.map((item) => <ProjectCard props={item} key={item._id}/>)}
      </div>

  )
}

export default ProjectsDisplay