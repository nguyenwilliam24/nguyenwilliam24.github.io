import React from 'react'
import './Projects.css'
import projects_data from '../assets/projects_data'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../layout/PageLayout'

const Projects = () => {
  const navigate = useNavigate();

  return (
    <PageLayout title="Projects">
      <div className="projects-container">
        {projects_data.map(
            (project,index)=>{return <img key={index} onClick={()=>navigate(project.p_path)} src={project.p_image} alt=""/>}
        )}
      </div>
    </PageLayout>
  )
}

export default Projects