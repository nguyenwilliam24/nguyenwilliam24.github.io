import React from 'react'
import './Header.css'
import profile_image from '../../assets/profile_image.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate();

  return (
    <div id="header" className="header">
        <img src={profile_image} alt="Profile"/>
        <h1>I'm <span>William Nguyen</span>, a gameplay programmer.</h1>
        <p>I enjoy designing and implementing gameplay mechanics and abilities.</p>
        <div className="header-action">
            <div className="header-resume" onClick={()=>navigate("/resume")}>My Resume</div>
        </div>
    </div>
  )
}

export default Header