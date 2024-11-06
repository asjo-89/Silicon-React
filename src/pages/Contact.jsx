import React from 'react'

import HeroContact from '../components/HeroContact'
import Location from '../components/Location'
import BreadCrumb from '../components/BreadCrumb'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Contact = ({ toggleTheme, isDark}) => {
  return (
    <>
        <div className="contact-wrapper">
          <div className="contact-container">
            <Header toggleTheme={toggleTheme} isDark={isDark} /> 
            <BreadCrumb />
          </div>
        </div>
        <HeroContact />
        <Location />
        <Footer />
    </>
  )
}

export default Contact
