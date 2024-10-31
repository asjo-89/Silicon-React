import React from 'react'

const Hero = () => {
  return (
    <>
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
                        <img id="appstore-light" src="/images/appstore.svg" alt="App store icon." />
                        <img loading="lazy" id="appstore-dark" src="/images/appstore-dark.svg" alt="App store icon." />
                    </a>
                    <a className="btn btn-app-download" href="https://play.google.com/store">
                        <img id="gp-light" src="/images/googleplay.svg" alt="Google play icon." />
                        <img loading="lazy" id="gp-dark" src="/images/googleplay-dark.svg" alt="Google play icon." />
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
                <img loading="lazy" className="iphone-back" src="/images/iphone-back.svg" alt="Iphone my budget" />
                <img loading="lazy" className="iphone-front" src="/images/iphone-front.svg" alt="Iphone your cards" />
            </div>
        </div>
    </>
  )
}

export default Hero
