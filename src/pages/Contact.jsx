import React from 'react'

import HeroContact from '../components/HeroContact'
import Location from '../components/Location'
import BreadCrumb from '../components/BreadCrumb'

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <BreadCrumb />
        <HeroContact />
        <Location />
      </div>
    </>
  )
}

export default Contact
