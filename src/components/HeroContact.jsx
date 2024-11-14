import React from 'react'

import Envelope from '../images/envelope.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import Career from '../images/careers.svg'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'


const HeroContact = () => {


    return (
        <>
            <section id="hero-contact">
                <div className="container">
                    <div className="content">
                        <div className="contacts">
                            <h1>Contact Us</h1>

                            <div className="card">
                                <div className="contact">
                                    <img id="icon-email" src={Envelope} alt="Lines of an envelope." aria-hidden="true" />
                                    <h2>Email us</h2>
                                </div>
                                <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
                                <Link className="link" to="/" aria-label="Leave a message.">
                                    <span className="link-contact">Leave a message</span>
                                    <img src={ArrowPurple} alt="A purple arrow." aria-hidden="true" />
                                </Link>
                            </div>

                            <div className="card">
                                <div className="contact">
                                    <img id="icon-career" src={Career} alt="Illustration of two people." aria-hidden="true" />
                                    <h2>Careers</h2>
                                </div>
                                <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
                                <Link className="link" to="/" aria-label="Send an application.">
                                    <span className="link-contact">Send an application</span>
                                    <img src={ArrowPurple} alt="A purple arrow." aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                        <ContactForm />
                    </div>

                </div>
            </section>
        </>
    )
}

export default HeroContact
