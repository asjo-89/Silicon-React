import React, { useState, useEffect } from 'react'

import Notification from '../images/notification.svg'


const Subscribe = () => {

  const [formData, setFormData] = useState({ email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});



  const validateInput = (name, value) => {
    let error = '';
    if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
      error = 'Enter a valid email (eg. name@example.com).';
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }))
  }

  const validateForm = () => {

    const newErrors = {};

    if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email (eg. name@example.com).';
    }

    setErrors(newErrors);
    setLoading(false);
    return Object.keys(newErrors).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateInput(name, value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (res.ok) {
          setIsSubmitted(true);
          setFormData({ email: '' });
          setErrors({});
          console.log('The request was sent successfully.');
        }
        else {
          const error = await res.json();
          console.log(error.errors)
          setErrors(error.errors)
        }
      }
      catch (error) {
        console.log('There was an error!', error);
      }
      finally {
        setLoading(false);
      }
    }
  }


  useEffect(() => {
    if (isSubmitted) {

      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

      return () => clearTimeout(timer)
    }
  }, [isSubmitted]);


  if (isSubmitted) {
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
            <img loading="lazy" src={Notification} alt="A yellow notification bell." />
            <h3 id="text">Subscribe to our newsletter</h3>
            <h3 className="text-desktop">Subscribe to our newsletter to stay informed about latest updates</h3>
          </div>
          <form className="form" onSubmit={handleSubmit} noValidate>
            <input value={formData.email} onChange={handleChange} name="email" className={`form-input ${errors.email ? 'validate-error' : ''}`} placeholder="Enter your email" />
            <span className="msg-error">{errors.email && errors.email}</span>
            <button className="btn btn-primary" htmlFor="email">{loading ? 'Submitting...' : 'Subscribe'}</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Subscribe
