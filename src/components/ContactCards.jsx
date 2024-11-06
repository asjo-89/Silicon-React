import React from 'react'

import Phone from '../images/phone.svg'
import Message from '../images/message.svg'
import ArrowPurple from '../images/arrow-purple.svg'
import ArrowGreen from '../images/arrow-green.svg'

const ContactCards = () => {

    const cardItems = [
        {
            id: 'purple',
            src1: Phone,
            title: 'Still have questions?',
            content: 'Contact us',
            src2: ArrowPurple
        },
        {
            id: 'green',
            src1: Message,
            title: 'Still have questions?',
            content: 'Contact us',
            src2: ArrowGreen
        }
    ]

  return (
    <>
        {cardItems.map((item, index) => (
            <div id="contact-card" key={index}>
                <img loading="lazy" src={item.src1} alt="A Telephone icon." />
                <span className="small-text">{item.title}</span>
                <a href="#" className="contact-link" id={item.id}>
                    <span>{item.content}</span>
                    <img loading="lazy" src={item.src2} alt="A purple arrow." />
                </a>
            </div>
        ))}
    </>
  )
}

export default ContactCards
