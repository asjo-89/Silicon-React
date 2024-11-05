import React from 'react'

import Logo1 from '../images/logo1.svg'
import Logo2 from '../images/logo2.svg'
import Logo3 from '../images/logo3.svg'
import Logo4 from '../images/logo4.svg'
import Logo5 from '../images/logo5.svg'
import Logo6 from '../images/logo6.svg'

const Logos = () => {
  return (
    <section id="logo-row">
        <div className="container">
            <div className="logo">
                <img loading="lazy" src={Logo1} alt="Logoipsum 1" />
            </div>

            <div className="logo">
                <img loading="lazy" src={Logo2} alt="Logoipsum 2" />                
            </div>
            
            <div className="logo">
                <img loading="lazy" id="logo3" src={Logo3} alt="Logoipsum 3" />
            </div>
            
            <div className="logo">
                <img loading="lazy" src={Logo4} alt="Logoipsum 4" />
            </div>
            
            <div className="logo" id="logo5">
                <img loading="lazy" src={Logo5} alt="Logoipsum 5" />
            </div>
            
            <div className="logo" id="logo6">
                <img loading="lazy" src={Logo6} alt="Logoipsum 6" />
            </div>

        </div>
    </section>
  )
}

export default Logos
