import React from 'react'

import Appstore from '../images/appstore.svg'
import AppstoreDark from '../images/appstore-dark.svg'
import GooglePlay from '../images/googleplay.svg'
import GooglePlayDark from '../images/googleplay-dark.svg'
import IphoneBack from '../images/iphone-back.svg'
import IphoneFront from '../images/iphone-front.svg'


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
                    <div className="buttons-app">
                        <a className="btn btn-app-download" href="https://apps.apple.com/se/app/apple-store/id375380948">
                            <img id="appstore-light" src={Appstore} alt="App store icon." />
                            <img loading="lazy" id="appstore-dark" src={AppstoreDark} alt="App store icon." />
                        </a>
                        <a className="btn btn-app-download" href="https://play.google.com/store">
                            <img id="gp-light" src={GooglePlay} alt="Google play icon." />
                            <img loading="lazy" id="gp-dark" src={GooglePlayDark} alt="Google play icon." />
                        </a>
                    </div>
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
