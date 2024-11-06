import React, { useState, useEffect } from 'react'

// import ConfirmForm from './ConfirmForm';

import Notification from '../images/notification.svg'
import { Link } from 'react-router-dom';



const Subscribe = () => {

  const [email, setEmail] = useState('');
  const [isValidated, setIsValidated] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [isConfirmed, setIsConfirmed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(email.trim() === '') {
      setIsValidated(false);
      return
    }

    setIsValidated(true);
    setIsSubmitted(true);
    // setIsConfirmed(true);

  }

  useEffect(() => {
    if(isSubmitted) {

      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  
  


  return (
    <>
        <section id="subscribe">
          <div className="container">
            <div className="head">
              <img loading="lazy" src={Notification} alt="A yellow bell." />
              <h3 id="text">Subscribe to our newsletter</h3>
              <h3 className="text-desktop">Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>

            {isSubmitted && (
              <div className="box">
                <h3>Thank's for subscribing!</h3>
              </div>
            )}

            {!isSubmitted && (
              <form className="form" onSubmit={handleSubmit}>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className={`form-input ${isValidated ? '' : 'validate-error'}`} name="email" placeholder="Enter your email" />
                  {!isValidated && <label className="msg-error">Please enter a valid email address.</label>}
                <button className="btn btn-primary" htmlFor="email">Subscribe</button>
              </form>
              )}

          </div>
      </section>
    </>
  )
}

export default Subscribe
