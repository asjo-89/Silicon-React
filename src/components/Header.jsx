import React from 'react'
import SiliconLogo from '../images/silicon.svg'
import SiliconLogoDark from '../images/silicon-dark.svg'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Header = ({ toggleTheme, isDark }) => {


  return (
    <header>
        <div className="container-nav">
            <Link id="logo-light" to="/"><img src={!isDark ? SiliconLogo : SiliconLogoDark} alt="Silicon logo" /></Link>
            <nav className="navbar">
                <NavLink to="/" className="nav-link" >Features</NavLink>
                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            </nav>
            <div className="toggle-group">
                <label className="label">Dark Mode</label>
                <div className={`btn-toggle-switch ${isDark ? 'btn-bg-dark' : ''}`} onClick={toggleTheme}>
                    <span className={`toggle-circle ${isDark ? 'right' : ''}`}></span>
                </div>
            </div>
            <a href="#" className="btn btn-primary" id="signin">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>
            <MobileMenu isDark={isDark} />     
        </div>
    </header>
  )
}

export default Header
