import React from 'react'
import './Portfolio.css'
import projects_data from '../../assets/projects_data'
import { useNavigate } from 'react-router-dom'
import arrow_icon from '../../assets/arrow_icon.svg'

const Portfolio = () => {
  const navigate = useNavigate();

  const Projects = "/projects"
  const ProjectsMax = 6;

  return (
    <div id="portfolio" className="portfolio">
        <div className="portfolio-title">
            <h1>Portfolio</h1>
        </div>
        <div className="portfolio-container">
            {projects_data.map(
                (project,index)=>{
                  if (index > ProjectsMax - 1) {
                    return <></>
                  } else {
                    return <img key={index} onClick={()=>navigate(Projects + "/" + project.p_path)} src={project.p_image} alt=""/>
                  }
                }
            )}
        </div>
        <div className="portfolio-showmore" onClick={()=>{navigate(Projects); window.scrollTo(0,0)}}>
          <p>Show More</p>
          <img src={arrow_icon} alt="Arrow"/>
        </div>
    </div>
  )
}

export default Portfolio