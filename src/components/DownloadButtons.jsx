import React from 'react'

import Appstore from '../images/appstore.svg'
import AppstoreDark from '../images/appstore-dark.svg'
import GooglePlay from '../images/googleplay.svg'
import GooglePlayDark from '../images/googleplay-dark.svg'

const DownloadButtons = () => {

    

  return (
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
  )
}

export default DownloadButtons
