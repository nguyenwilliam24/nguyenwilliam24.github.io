import React from 'react'
import './Header.css'
import profile_image from '../../assets/profile_image.png'

const Header = () => {
  return (
    <div className="header">
        <img src={profile_image} alt="Profile"/>
        <h1>I'm <span>William Nguyen</span>, a gameplay programmer.</h1>
        <p>I enjoy designing and implementing gameplay mechanics and abilities.</p>
        <div className="header-action">
            <div className="header-contact">Contact Me</div>
            <div className="header-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Header