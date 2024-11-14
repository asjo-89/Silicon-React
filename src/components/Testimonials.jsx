import React from 'react'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {


    return (
        <section id="clients">
            <div className="container">
                <h2>Clients are Loving Our App</h2>
                <span className="quotation" id="quotation-1">
                    <i className="fa-solid fa-quote-left"></i>
                </span>
                <span className="quotation" id="quotation-2">
                    <i className="fa-solid fa-quote-left"></i>
                </span>
                <div className="cards">
                    <TestimonialCard />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
