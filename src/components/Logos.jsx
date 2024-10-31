import React from 'react'

const Logos = () => {
  return (
    <section id="logo-row">
        <div className="container">
            <div className="logo">
                <img loading="lazy" src="/images/logo1.svg" alt="Logoipsum 1" />
            </div>

            <div className="logo">
                <img loading="lazy" src="/images/logo2.svg" alt="Logoipsum 2" />                
            </div>
            
            <div className="logo">
                <img loading="lazy" id="logo3" src="/images/logo3.svg" alt="Logoipsum 3" />
            </div>
            
            <div className="logo">
                <img loading="lazy" src="/images/logo4.svg" alt="Logoipsum 4" />
            </div>
            
            <div className="logo" id="logo5">
                <img loading="lazy" src="/images/logo5.svg" alt="Logoipsum 5" />
            </div>
            
            <div className="logo" id="logo6">
                <img loading="lazy" src="/images/logo6.svg" alt="Logoipsum 6" />
            </div>

        </div>
    </section>
  )
}

export default Logos
