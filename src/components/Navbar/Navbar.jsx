import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="Logo"/>
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
        </ul>
        <div className="nav-contact">Contact</div>
    </div>
  )
}

export default Navbar