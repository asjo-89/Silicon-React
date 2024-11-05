import React, { useEffect, useState } from 'react'
import SiliconLogo from '../images/silicon.svg'
import SiliconLogoDark from '../images/silicon-dark.svg'
import { NavLink, Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Header = () => {

    const [isDark, setIsDark] = useState(() => {
        const savedIsDark = localStorage.getItem('isDark');

        if (savedIsDark === null) return false;

        try {
            return JSON.parse(savedIsDark);
        } catch (error) {
            console.error("Error parsing isDark value from localStorage:", error);
            return false; 
        }
    });

    useEffect(() => {
        localStorage.setItem('isDark', JSON.stringify(isDark));
    }, [isDark] );
    
    
    const handleClick = (e) => {
        e.preventDefault();
        setIsDark(prev => !prev)
    }
    useEffect(() => {
        console.log(isDark)
    }, [isDark] )

  return (
    <header>
        <div className="container-nav">
            <Link id="logo-light" to="/"><img src={SiliconLogo} alt="Silicon logo" /></Link>
            <Link loading="lazy" id="logo-dark" to="/"><img src={SiliconLogoDark} alt="Silicon logo" /></Link>
            <nav className="navbar">
                <NavLink to="/" className="nav-link" >Features</NavLink>
                <NavLink to="/contact" className="nav-link" >Contact</NavLink>
            </nav>
            <div className="toggle-group">
                <label className="label">Dark Mode</label>
                <div className={`btn-toggle-switch ${isDark ? 'btn-bg-dark' : ''}`} onClick={handleClick}>
                    <span className={`toggle-circle ${isDark ? 'right' : ''}`}></span>
                </div>
            </div>
            <a href="#" className="btn btn-primary" id="signin">
                <i className="fa-regular fa-user"></i>
                <span>Sign in / up</span>
            </a>
            <MobileMenu />     
        </div>
    </header>
  )
}

export default Header
