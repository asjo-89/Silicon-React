import React from 'react'
import Notification from '../images/notification.svg'


const Subscribe = () => {

  const handleSubmit = (input) => {
    if(input = '') return

    //Skicka till API
    //Visa ConfirmForm

  }
  return (
    <section id="subscribe">
        <div className="container">
            <div className="head">
              <img loading="lazy" src={Notification} alt="A yellow bell." />
              <h3>Subscribe to our newsletter</h3>
              <span className="text-desktop">Subscribe to our newsletter to stay informed about latest updates</span>
            </div>
            <form className="form">
              <i className="letter fa-regular fa-envelope"></i>                
              <input type="email" className="form-input" name="email" placeholder="Your email" />
              <button className="btn btn-primary" htmlFor="email">Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Subscribe
