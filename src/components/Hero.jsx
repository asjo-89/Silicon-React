import React from 'react'


import IphoneBack from '../images/iphone-back.svg'
import IphoneFront from '../images/iphone-front.svg'
import DownloadButtons from './DownloadButtons'


const Hero = () => {

  return (
    <>
        <section id="hero">
            <div className="container">
                <div className="headline">
                    <h1>Manage All Your <br />
                        Money in One App</h1>
                </div>
                
                <div className="content">
                    <p>We offer you a new generation of the mobile banking. <br />
                    Save, spend & manage money in your pocket.</p>
                    
                    <DownloadButtons />

                    <a href="#" className="discover-more">
                        <span className="btn btn-circle">
                            <i className="fa-solid fa-chevron-down"></i>
                        </span>
                        <label>Discover more</label>
                    </a>
                </div>

                <div className="images">
                    <img loading="lazy" className="iphone-back" src={IphoneBack}alt="Iphone my budget" />
                    <img loading="lazy" className="iphone-front" src={IphoneFront} alt="Iphone your cards" />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero
