import React from 'react'

import { Link } from 'react-router-dom';


const BreadCrumb = () => {
  return (
        <div className="breadcrumb-group">
            <Link to="/" className="breadcrumb link" aria-label="Link that takes you to the home page.">
              <i className="breadcrumb fa-solid fa-house" aria-hidden="true"></i>
              <p className="breadcrumb">Home</p>
            </Link>
            <i className="breadcrumb fa-solid fa-arrow-right" aria-hidden="true"></i>
            <Link to="/contact" className="breadcrumb link" aria-label="Link that takes you to the contact page.">
              <p className="breadcrumb" id="page-location">Contact</p>
            </Link>
        </div>
  )
}

export default BreadCrumb
