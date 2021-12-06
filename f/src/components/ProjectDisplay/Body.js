import React from 'react'
import ProjectCard from '../ProjectCard/Body'
import './style.css'

const prj = [{
        title: "Defiance",
        entry: "GREATEST OF ALL TIME",
        key: 1
    },
    {
        title: "Farm Friend",
        entry: "helping out farms",
        key: 2
    }
]

function ProjectDiplay() {
    return (
        <div className='project-display-container'>
            {prj.map((description) => <ProjectCard props={description} key={description.key}/>)}
        </div>
    )
}

export default ProjectDiplay
