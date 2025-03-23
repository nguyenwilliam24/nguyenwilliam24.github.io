import React from 'react'
import './ProjectHeader.css'

const ProjectHeader = ({role, engine, platform, skills}) => {
  return (
    <div className="project-header">
        <div className="project-section">
            <div className="section-title">Role</div>
            <div className="section-description">{role}</div>
        </div>
        <hr/>
        <div className="project-section">
            <div className="section-title">Engine</div>
            <div className="section-description">{engine} ({platform})</div>
        </div>
        <hr/>
        <div className="project-section">
            <div className="section-title">Practiced Skills</div>
            {skills.map((skill, index) => {return <div key={index} className="section-description">{skill}</div>})}
        </div>
    </div>
  )
}

export default ProjectHeader