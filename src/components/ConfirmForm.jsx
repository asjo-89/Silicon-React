import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmForm = () => {
  return (
    <>
      <div className="box">
        <h3>The request has been successfully sent!</h3>
        <Link to="/" className="btn btn-primary">Return to homepage</Link>
      </div>
    </>
  )
}

export default ConfirmForm
