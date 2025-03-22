import React from 'react'
import { Outlet } from 'react-router-dom'

const ProjectsLayout = () => {
  return (
    <div className="projects-layout">
        <Outlet/>
    </div>
  )
}

export default ProjectsLayout