import React from 'react'
import Phone from '../images/phone.svg'
import Message from '../images/message.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import ArrowGreen from '../images/arrow-green.svg'
import Accordion from './Accordion'

const Faq = () => {
  return (
    <section id="faq">
        <div className="container">
            <div className="contact">
                <div id="head">
                    <h2>Any questions? <br /> Check out the FAQs</h2>
                    <span id="head-text">Still have unanswered questions and need to get in touch?</span>
                </div>
                <div className="contact-us">
                    <div id="phone">
                        <img loading="lazy" src={Phone} alt="A Telephone icon." />
                        <span className="small-text">Still have questions?</span>
                        <a href="#" className="contact-link" id="purple">
                            <span>Contact us</span>
                            <img loading="lazy" src={ArrowPurple} alt="A purple arrow." />
                        </a>
                    </div>
                    <div id="message">
                        <img loading="lazy" src={Message} alt="A message icon." />
                        <span>Still have questions?</span>
                        <a href="#" className="contact-link" id="green">
                            <span>Contact us</span>
                            <img loading="lazy" src={ArrowGreen} alt="A green arrow." />
                        </a>
                    </div>                
                </div>
            </div>
            <section className="accordion">
                <Accordion />
            </section>
        </div>
    </section>
  )
}

export default Faq
