import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../contexts/ThemeContext'

import MenuLight from '../images/menuLight.svg'
import MenuDark from '../images/menuDark.svg'

const MobileMenu = () => {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleActive = () => {
        setIsActive(!isActive);
    }

    const handleClick = () => {
        setIsOpen(!isOpen);
        toggleActive();
    }

    const closeDropDown = () => {
        setIsOpen(false);
    }

    const closeOnOutsideClick = (e) => {
        if(menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    } 

    useEffect(() => {
        document.addEventListener('click', closeOnOutsideClick);

        return () => {
            document.removeEventListener('click', closeOnOutsideClick);
        }
    }, [])

    return (
        <>
            <div ref={menuRef}>
                <button className={`btn-mobile-menu ${isActive ? 'menu-active' : ''}`} aria-label={isOpen ? 'Close menu' : 'Open menu'}  onClick={handleClick}>
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
            </div>
        </>
    )
}

export default MobileMenu
