import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import MenuLight from '../images/menuLight.svg'
import MenuDark from '../images/menuDark.svg'

const MobileMenu = ({ isDark }) => {
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
                <img id="menu-bars" src={!isDark ? MenuLight : MenuDark} />
                {/* <i id="mob-menu-light" className={!isDark ? 'fa-solid fa-bars' : 'fa-solid fa-bars style={{color: "#ededed"}}'}></i>
                <i loading="lazy" id="mob-menu-dark" className="fa-solid fa-bars" style={{color: "#ededed"}}></i>        */}
            </button> 
        <div className="dropdown-container">
            {isOpen && (
                <div className="dropdown-menu">
                    <Link to="/" onClick={closeDropDown}><p>Home</p></Link>
                    <Link to="/" onClick={closeDropDown}><p>Features</p></Link>
                    <Link to="/contact" onClick={closeDropDown}><p>Contact</p></Link>
                </div>
            )}
        </div>
    </>
  )
}

export default MobileMenu
