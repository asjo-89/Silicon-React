import React from 'react'

import Logo1 from '../images/logo1.svg'
import Logo2 from '../images/logo2.svg'
import Logo3 from '../images/logo3.svg'
import Logo4 from '../images/logo4.svg'
import Logo5 from '../images/logo5.svg'
import Logo6 from '../images/logo6.svg'

const Logos = () => {

    const logos = [
        {
            id: 1,
            src: Logo1
        },
        {
            id: 2,
            src: Logo2
        },
        {
            id: 3,
            src: Logo3
        },
        {
            id: 4,
            src: Logo4
        },
        {
            id: 5,
            src: Logo5
        },
        {
            id: 6,
            src: Logo6
        }
    ]

  return (
    <section id="logo-row">
        <div className="container">
            {logos.map((logo, index) => (
                <div className="logo" id={`logo${logo.id}`}key={index}>
                    <img loading="lazy" src={logo.src} alt="Logoipsum 1" />
                </div>
            ))}
        </div>
    </section>
  )
}

export default Logos
