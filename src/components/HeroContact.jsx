import React from 'react'

import Envelope from '../images/envelope.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import Career from '../images/careers.svg'


const HeroContact = () => {
  return (
    <div>
      <section id="hero-contact">            
                <div className="container">
                    <div className="content">
                        <div className="contacts">
                            <h1>Contact Us</h1>

                            <div className="card">
                                <div className="contact">
                                    <img id="icon-email" src={Envelope} alt="Lines of an envelope." />
                                    <h3>Email us</h3>
                                </div>
                                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                                <a href="#">
                                    <span className="link-contact">Leave a message</span>
                                    <img src={ArrowPurple} alt="A purple arrow." />
                                </a>
                            </div>

                            <div className="card">
                                <div className="contact">
                                    <img id="icon-career" src={Career} alt="Illustration of two people." />
                                    <h3>Careers</h3>
                                </div>
                                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <a href="#">
                                    <span className="link-contact">Send an application</span>
                                    <img src={ArrowPurple} alt="A purple arrow." />
                                </a>
                            </div>
                        </div>

                        <div className="form-container">
                            <h2>Get Online Consultation</h2>
                            
                            <form className="form">
                                <div className="input-group">
                                    <label htmlFor="">Full name</label>
                                    <input className="form-input" type="text" placeholder="Enter full name" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="">Email address</label>
                                    <input className="form-input" type="email" placeholder="Enter email address" />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="">Specialist</label>
                                    <input className="form-input" list="specialist" name="specialist" />
                                    <datalist id="specialist">
                                        <option value="Cardiology"></option>
                                        <option value="Dermatology"></option>
                                        <option value="Endoskopy"></option>
                                        <option value="Neurology"></option>
                                        <option value="Obstetrics/Gynecology"></option>
                                        <option value="Orthopedy"></option>
                                        <option value="Palliative team"></option>
                                        <option value="Pediatric medicine"></option>
                                        <option value="Psychiatry"></option>
                                        <option value="Radiology"></option>
                                        <option value="Rheumatology"></option>
                                        <option value="Urology"></option>
                                    </datalist>
                                </div>

                                <button className="btn btn-primary">Make an appointment</button>
                            </form>

                        </div>

                    </div>

                </div>    
            </section>
    </div>
  )
}

export default HeroContact
