import React from 'react'

import MapStamp from '../images/map-stamp.svg'
import PhoneCall from '../images/phone-call.svg'
import Clock from '../images/clock.svg'
import MapWithStamps from '../images/mapWithStamps.svg'
import { Link } from 'react-router-dom'

const Location = () => {


    const medicalCenter = [
        {
            id: '1',
            title: 'Medical Center 1',
            address: '4517 Washington Ave. Manchester, Kentucky 39495',
            phone: '(406) 555-0120',
            hours1: 'Mon - Fri: 9:00 am - 22:00 am',
            hours2: 'Sat - Sun: 9:00 am - 20:00 am'
        },
        {
            id: '2',
            title: 'Medical Center 2',
            address: '2464 Royal Ln. Mesa,New Jersey 45463',
            phone: '(406) 544-0123',
            hours1: 'Mon - Fri: 9:00 am - 22:00 am',
            hours2: 'Sat - Sun: 9:00 am - 20:00 am'
        }
    ]
    
    return (
        <section id="location">
            <div className="container">
                <div className="contact-info">
                    {medicalCenter.map((item, index) => (
                        <div className="office" key={index} id={`office-${item.id}`}>
                            <h2>{item.title}</h2>
                            <div className="info">
                                <img loading="lazy" src={MapStamp} alt="Map stamp." />
                                <p>{item.address}</p>
                            </div>

                            <div className="info">
                                <img loading="lazy" src={PhoneCall} alt="Phone ringing." />
                                <p>{item.phone}</p>
                            </div>

                            <div className="info">
                                <img loading="lazy" src={Clock} alt="A clock." />
                                <p><span>{item.hours1}</span>
                                    <span>{item.hours2}</span></p>
                            </div>

                        </div>
                    ))}
                    <div className="social-media">

                        <Link to="https://www.facebook.com" className="media link" aria-label="Link to Facebook.">
                            <i className="fa-brands fa-square-facebook"></i>
                        </Link>

                        <Link to="https://www.twitter.com" className="media link" aria-label="Link to Twitter.">
                            <i className="fa-brands fa-twitter"></i>
                        </Link>

                        <Link to="https://www.instagram.com" className="media link" aria-label="Link to Instagram.">
                            <i className="fa-brands fa-square-instagram"></i>
                        </Link>

                        <Link to="https://www.youtube.com" className="media link" aria-label="Link to Youtube.">
                            <i className="fa-brands fa-youtube"></i>
                        </Link>

                    </div>
                    <div className="map">
                        <img loading="lazy" src={MapWithStamps} alt="A map with location marks." />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Location
