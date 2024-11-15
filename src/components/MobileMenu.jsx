import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

import MenuLight from '../images/menuLight.svg'
import MenuDark from '../images/menuDark.svg'

const MobileMenu = () => {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState(false)

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
        toggleActive();
    }

    const closeDropDown = () => {
        setIsOpen(false);
    }

    return (
        <>
            <button className={`btn-mobile-menu ${isActive ? 'menu-active' : ''}`} aria-label="Menu" onClick={handleClick}>
                <img id="menu-bars" src={theme === 'light-theme' ? MenuLight : MenuDark} alt="Menu" />
            </button>
            <div className="dropdown-container">
                {isOpen && (
                    <div className="dropdown-menu">
                        <Link className="link" to="/" onClick={closeDropDown}><p>Home</p></Link>
                        <a className="link" href="/#app-features" onClick={closeDropDown}><p>Features</p></a>
                        <Link className="link" to="/contact" onClick={closeDropDown}><p>Contact</p></Link>
                    </div>
                )}
            </div>
        </>
    )
}

export default MobileMenu
