import React from 'react'
import './ProjectCard.css'

function ProjectCard ({props}) {
    return(
        <div className="project-card-container">
            <div className="project-card-title">
                <h1>{props.title}</h1>
            </div>
            <div className="project-card-entry">
                <p>
                    {props.entry}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard