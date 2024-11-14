import React from 'react'

import FeaturesItems from './FeaturesItems'

import IphoneFeatures from '../images/iphone-features.svg'
import Card from '../images/card.svg'


const Features = () => {
  return (
    <section id="app-features">
        <div className="container">
            <div className="images">
                <img loading="lazy" id="iphone-features" src={IphoneFeatures} alt="Iphone app features" />
                <img loading="lazy" id="card-features" src={Card} alt="Visa creadit card" />
            </div>
            <div className="content">
                <div className="header">
                    <h2>App features</h2>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices.</p>
                    <p> Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                </div>
                <FeaturesItems />
            </div>
        </div>
    </section>
  )
}

export default Features
