import React from 'react'
import './ProjectCard.css'

function ProjectCard ({props}) {
    return(
        <div className="project-card-container">
            <img src={props.src} alt=''></img>
            <div className="project-card-entry">
                <h1>{props.title}</h1>
                <p>
                    {props.entry}
                </p>
            </div>
        </div>
    )
}

export default ProjectCard