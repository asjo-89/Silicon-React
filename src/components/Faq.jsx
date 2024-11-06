import React from 'react'

import Accordion from './Accordion'
import ContactCards from './ContactCards'

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
                    <ContactCards />                
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
