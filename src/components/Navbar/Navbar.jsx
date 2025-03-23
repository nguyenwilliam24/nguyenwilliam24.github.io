import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();

  const menuReference = useRef();

  const openMenu = () => {
    menuReference.current.style.right="0";
  }

  const closeMenu = () => {
    menuReference.current.style.right="-350px";
  }

  return (
    <div className="navbar">
        <img className="nav-logo" src={logo} alt="Logo" onClick={()=>navigate("/")}/>
        <img className="nav-menu-open" onClick={openMenu} src={menu_open} alt="Menu Open"/>
        <ul ref={menuReference} className="nav-menu">
          <img className="nav-menu-close" onClick={closeMenu} src={menu_close} alt="Menu Close"/>
          <NavLink to="/" className="navlink"><li><p>Home</p></li></NavLink>
          <NavLink to="/resume" className="navlink"><li><p>Resume</p></li></NavLink>
          <NavLink to="/projects" className="navlink"><li><p>Projects</p></li></NavLink>
        </ul>
    </div>
  )
}

export default Navbar