import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

import Appstore from '../images/appstore.svg'
import AppstoreDark from '../images/appstore-dark.svg'
import GooglePlay from '../images/googleplay.svg'
import GooglePlayDark from '../images/googleplay-dark.svg'
import { Link } from 'react-router-dom'

const DownloadButtons = () => {
  const { theme } = useTheme();
    

  return (
    <div className="buttons-app">
        <Link className="btn btn-app-download" target="_blank" to="https://apps.apple.com/se/app/apple-store/id375380948" aria-label="Link that takes you to Apple Store.">
            <img className="app-download" src={theme ===  'light-theme' ? Appstore : AppstoreDark} alt="App store icon." />
        </Link>
        <Link className="btn btn-app-download" target="_blank" to="https://play.google.com/store" aria-label="Link that takes you to Google Play.">
            <img className="app-download" src={theme ===  'light-theme' ? GooglePlay : GooglePlayDark} alt="Google play icon." />
        </Link>
    </div>
  )
}

export default DownloadButtons
