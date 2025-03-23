import React from 'react'
import { useParams } from 'react-router-dom'
import projects_data from '../../assets/projects_data'

const Project = () => {
    const {project} = useParams();
    const Project = projects_data.find(p => p.p_path == project);
    const Component = Project.p_component;
  return (
    <Component/>
  )
}

export default Project