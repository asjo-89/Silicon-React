import React from 'react'
import SiliconLogo from '../images/silicon.svg'
import SiliconLogoDark from '../images/silicon-dark.svg'
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="container-nav">
            <Link id="logo-light" to="/"><img src={SiliconLogo} alt="Silicon logo" /></Link>
            <Link loading="lazy" id="logo-dark" to="/"><img src={SiliconLogoDark} alt="Silicon logo" /></Link>
            <nav className="navbar">
                <NavLink to="/" className="nav-link" >Features</NavLink>
                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            </nav>
            <div className="btn-toggle-switch">
                <span className="label">Dark mode</span>
                <label className="toggle" htmlFor="theme-switch">
                    <span className="slider" htmlFor="theme-switch"></span>
                </label>
            </div>
            <a href="#" className="btn btn-primary" id="signin">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>
            <button className="btn-mobile-menu" aria-label="Menu">
                <i id="mob-menu-light" className="fa-solid fa-bars"></i>
                <i loading="lazy" id="mob-menu-dark" className="fa-solid fa-bars" style={{color: "#ededed"}}></i>       
            </button>      
        </div>
    </header>
  )
}

export default Header
