import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const MobileMenu = () => {
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
                <i id="mob-menu-light" className="fa-solid fa-bars"></i>
                <i loading="lazy" id="mob-menu-dark" className="fa-solid fa-bars" style={{color: "#ededed"}}></i>       
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
