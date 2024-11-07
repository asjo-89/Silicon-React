import React, { useState, useEffect } from 'react'

import Notification from '../images/notification.svg'


const Subscribe = () => {

  const [formData, setFormData] = useState({ email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValidated, setIsValidated] = useState(true);

  const handleChange = (e) => {
    setIsValidated(true);
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if(res.ok) {
      setIsSubmitted(true);
      setFormData({ email: '' });
    }
    else {
      setIsValidated(false);
      setFormData({ email: '' });
      
      const error = res.json();
      console.log(error);
    }

  }


  useEffect(() => {
    if(isSubmitted) {

      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer)
    }
  }, [isSubmitted]);

  
  if(isSubmitted) {
    return (
      <section id="subscribe">
        <div className="container">
          <div className="box">
            <h3>Thank you for subscribing!</h3>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
        <section id="subscribe">
          <div className="container">
            <div className="head">
              <img loading="lazy" src={Notification} alt="A yellow bell." />
              <h3 id="text">Subscribe to our newsletter</h3>
              <h3 className="text-desktop">Subscribe to our newsletter to stay informed about latest updates</h3>
            </div>
            <form className="form" onSubmit={handleSubmit} noValidate>
              <input value={formData.email} onChange={handleChange} type="email" name="email" className={`form-input ${isValidated ? '' : 'validate-error'}`} placeholder="Enter your email" />
              {!isValidated && <label className="msg-error">Please enter a valid email address.</label>}
              <button className="btn btn-primary" htmlFor="email">Subscribe</button>
            </form>
          </div>
      </section>
    </>
  )
}

export default Subscribe
