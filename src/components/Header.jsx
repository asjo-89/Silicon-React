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
            <Link className="link" to="/" aria-label="Link to get to the home page.">
                <img id="logo" src={theme === 'light-theme' ? SiliconLogo : SiliconLogoDark} alt="Silicon logo" />
            </Link>
            <nav className="navbar">
                <NavLink to="/" className="nav-link link" aria-label="Link that takes you to the Features page.">Features</NavLink>
                <NavLink to="/contact" className="nav-link link" area-label="Link that takes you to the Contact page.">Contact</NavLink>
            </nav>
            <div className="toggle-group">
                <label className="label">Dark Mode</label>
                <div className={`btn-toggle-switch ${theme === 'light-theme' ? '' : 'btn-bg-dark'}`} onClick={toggleTheme}>
                    <span className={`toggle-circle ${theme === 'light-theme' ? '' : 'right'}`}></span>
                </div>
            </div>
            <Link href="#" className="btn btn-primary link" id="signin" aria-label="Link that takes you to Sign-in / up page.">
                <i className="fa-regular fa-user" aria-hidden="true" ></i>
                <span>Sign in / up</span>
            </Link>
            <MobileMenu />
        </>
    )
}

export default Header
