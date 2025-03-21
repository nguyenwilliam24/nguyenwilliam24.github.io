import React from 'react'
import './About.css'
import profile_image from '../../assets/about_profile_image.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profile_image} alt="Profile"/>
            </div>
            <div className="about-right">
                <div className="about-paragraph">
                    <p>I love playing character-based action games and like spending my time exploring how they are implemented, especially how they empower the player and fulfill the power fantasy.</p>
                    <p>I am extremely proud of all the projects I have been a part of and the diverse group of people I had the opportunity to work with during my academic career. I look forward to creating even more memorable moments with new colleagues and connecting through our shared passion for games.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>C++</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>C#</p><hr style={{width:"62.5%"}}/></div>
                    <div className="about-skill"><p>Unreal Engine</p><hr style={{width:"80%"}}/></div>
                    <div className="about-skill"><p>Perforce</p><hr style={{width:"67.5%"}}/></div>
                    <div className="about-skill"><p>Git</p><hr style={{width:"65%"}}/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About