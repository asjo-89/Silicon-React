import React from 'react'


import IphoneBack from '../images/iphone-back.svg'
import IphoneFront from '../images/iphone-front.svg'
import DownloadButtons from './DownloadButtons'
import { Link } from 'react-router-dom'


const Hero = () => {

    return (
        <>
            <section id="hero">
                <div className="container">
                    <div className="headline">
                        <h1>Manage All Your</h1>
                        <h1>Money in One App</h1>
                    </div>

                    <div className="content">
                        <p>We offer you a new generation of the mobile banking.</p>
                        <p>Save, spend & manage money in your pocket.</p>

                        <DownloadButtons />

                        <a href="#app-features" className="discover-more link" aria-label="Link to discover more.">
                            <span className="btn btn-circle">
                                <i className="fa-solid fa-chevron-down" aria-hidden="true" ></i>
                            </span>
                            <p className="p">Discover more</p>
                        </a>
                    </div>

                    <div className="images">
                        <img className="iphone-back" src={IphoneBack} alt="Iphone my budget" />
                        <img className="iphone-front" src={IphoneFront} alt="Iphone your cards" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
