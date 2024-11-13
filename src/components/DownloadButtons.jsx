import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

import Appstore from '../images/appstore.svg'
import AppstoreDark from '../images/appstore-dark.svg'
import GooglePlay from '../images/googleplay.svg'
import GooglePlayDark from '../images/googleplay-dark.svg'

const DownloadButtons = () => {
  const { theme } = useTheme();
    

  return (
    <div className="buttons-app">
        <a className="btn btn-app-download" href="https://apps.apple.com/se/app/apple-store/id375380948">
            <img src={theme ===  'light-theme' ? Appstore : AppstoreDark} alt="App store icon." />
        </a>
        <a className="btn btn-app-download" href="https://play.google.com/store">
            <img src={theme ===  'light-theme' ? GooglePlay : GooglePlayDark} alt="Google play icon." />
        </a>
    </div>
  )
}

export default DownloadButtons
