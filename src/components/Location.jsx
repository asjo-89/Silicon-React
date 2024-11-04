import React from 'react'

import MapStamp from '../images/map-stamp.svg'
import PhoneCall from '../images/phone-call.svg'
import Clock from '../images/clock.svg'
import MapWithStamps from '../images/mapWithStamps.svg'

const Location = () => {
  return (
    <section id="location">
                <div className="container">
                    <div className="contact-info">
                        <div className="office" id="office-1">
                            <h3>Medical Center 1</h3>

                            <div className="info">
                                <img src={MapStamp} alt="Map stamp." />
                                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                            </div>

                            <div className="info">
                                <img src={PhoneCall} alt="Phone ringing." />
                                <p>(406) 555-0120</p>
                            </div>
                            
                            <div className="info">
                                <img src={Clock} alt="A clock." />
                                <p><span>Mon - Fri: 9:00 am - 22:00 am</span>
                                    <span>Sat - Sun: 9:00 am - 20:00 am</span></p>
                            </div>
                            
                        </div>

                        <div className="office" id="office-2">
                            <h3>Medical Center 2</h3>

                            <div className="info">
                                <img src={MapStamp} alt="Map stamp." />
                                <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
                            </div>

                            <div className="info">
                                <img src={PhoneCall} alt="Phone ringing." />
                                <p>(406) 544-0123</p>
                            </div>

                            <div className="info">
                                <img src={Clock} alt="A clock." />
                                <p><span>Mon - Fri: 9:00 am - 22:00 am</span>
                                    <span>Sat - Sun: 9:00 am - 20:00 am</span></p>
                            </div>
                            
                        </div>
                        
                        <div className="social-media">

                            <a href="https://www.facebook.com" className="media">
                                <i className="fa-brands fa-square-facebook"></i>
                            </a>

                            <a href="https://www.twitter.com" className="media">
                                <i className="fa-brands fa-twitter"></i>
                            </a>

                            <a href="https://www.instagram.com" className="media">
                                <i className="fa-brands fa-square-instagram"></i>
                            </a>

                            <a href="https://www.youtube.com" className="media">
                                <i className="fa-brands fa-youtube"></i>
                            </a>

                        </div>
                        <div className="map">
                            <img src={MapWithStamps} alt="A map with location marks." />
                        </div>

                    </div>
                </div>
            </section>
  )
}

export default Location
