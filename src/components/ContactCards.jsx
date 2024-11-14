import React from 'react'

import Phone from '../images/phone.svg'
import Message from '../images/message.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import ArrowGreen from '../images/arrow-green.svg'
import { Link } from 'react-router-dom'

const ContactCards = () => {

    const cardItems = [
        {
            id: 'purple',
            src1: Phone,
            title: 'Still have questions?',
            content: 'Contact us',
            src2: ArrowPurple,
            label: 'call'
        },
        {
            id: 'green',
            src1: Message,
            title: 'Still have questions?',
            content: 'Contact us',
            src2: ArrowGreen,
            label: 'message'
        }
    ]

  return (
    <>
        {cardItems.map((item, index) => (
            <div id="contact-card" key={index}>
                <img loading="lazy" src={item.src1} alt="A Telephone icon." />
                <span className="small-text">{item.title}</span>
                <Link to="/" className="contact-link link" id={item.id} aria-label={`Link to ${item.label} us.`}>
                    <span>{item.content}</span>
                    <img loading="lazy" src={item.src2} alt="A purple arrow." aria-hidden="true" />
                </Link>
            </div>
        ))}
    </>
  )
}

export default ContactCards
