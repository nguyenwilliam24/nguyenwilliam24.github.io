import React from 'react'
import './Projects.css'
import projects_data from '../assets/projects_data'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
            {projects_data.map(
                (project,index)=>{return <img key={index} onClick={()=>navigate(project.p_path)} src={project.p_image} alt=""/>}
            )}
        </div>
    </div>
  )
}

export default Projects