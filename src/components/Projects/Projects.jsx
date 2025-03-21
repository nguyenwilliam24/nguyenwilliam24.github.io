import React from 'react'
import './Projects.css'
import projects_data from '../../assets/projects_data'

const Projects = () => {
  return (
    <div className="projects">
        <div className="projects-title">
            <h1>Projects</h1>
        </div>
        <div className="projects-container">
            {projects_data.map(
                (project,index)=>{return <img key={index} src={project.p_image} alt=""/>}
            )}
        </div>
    </div>
  )
}

export default Projects