import React from 'react'

import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import HowDoesItWork from '../components/HowDoesItWork'
import TransferPayment from '../components/TransferPayment'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'
import BreadCrumb from '../components/BreadCrumb'

const Home = () => {
  return (
    <div className="wrapper">
      <Hero />
      <Logos />
      <Features />
      <HowDoesItWork />
      <TransferPayment />
      <Testimonials />
      <Faq />
      <Subscribe />
    </div>
  )
}

export default Home
