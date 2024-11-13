import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

import SiliconLogo from '../images/silicon.svg'
import SiliconLogoDark from '../images/silicon-dark.svg'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Header = () => {

    const { theme, toggleTheme } = useTheme();


  return (
    <>
        <Link id="logo-light" to="/"><img src={theme === 'light-theme' ? SiliconLogo : SiliconLogoDark} alt="Silicon logo" /></Link>
        <nav className="navbar">
            <NavLink to="/" className="nav-link" >Features</NavLink>
            <NavLink to="/contact" className="nav-link" >Contact</NavLink>
        </nav>
        <div className="toggle-group">
            <label className="label">Dark Mode</label>
            <div className={`btn-toggle-switch ${theme ===  'light-theme' ? '' : 'btn-bg-dark'}`} onClick={toggleTheme}>
                <span className={`toggle-circle ${theme ===  'light-theme' ? '' : 'right'}`}></span>
            </div>
        </div>
        <a href="#" className="btn btn-primary" id="signin">
            <i className="fa-regular fa-user"></i>
            <span>Sign in / up</span>
        </a>
        <MobileMenu /> 
    </>
  )
}

export default Header
