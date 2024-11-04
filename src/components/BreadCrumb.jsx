import React from 'react'

import { Link } from 'react-router-dom';


const BreadCrumb = () => {
  return (
    
    <div className="container">
        <div className="breadcrumb-group">
            <Link to="/" className="breadcrumb"><i className="breadcrumb fa-solid fa-house"></i><p className="breadcrumb">Home</p></Link>
            <i className="breadcrumb fa-solid fa-arrow-right"></i>
            <Link to="/contact" className="breadcrumb"><p className="breadcrumb">Contact</p></Link>
        </div>
    </div>
  )
}

export default BreadCrumb
