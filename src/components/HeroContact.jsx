import React from 'react'

import Envelope from '../images/envelope.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import Career from '../images/careers.svg'
import ContactForm from './ContactForm'


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
                    <ContactForm />
                </div>

            </div>    
            </section>
    </div>
  )
}

export default HeroContact
