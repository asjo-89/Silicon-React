import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmForm = () => {
  return (
    <>
      <div className="box">
        <h3>Thank you for subscribing to our newletter!</h3>
        <Link to="/" className="btn btn-primary" id="return">Return to homepage</Link>
      </div>
    </>
  )
}

export default ConfirmForm
