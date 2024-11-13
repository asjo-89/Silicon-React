import React from 'react'

import Hero from '../components/Hero'
import Logos from '../components/Logos'
import Features from '../components/Features'
import HowDoesItWork from '../components/HowDoesItWork'
import TransferPayment from '../components/TransferPayment'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Subscribe from '../components/Subscribe'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {


  
  return (
    <>
      <div className="wrapper">
        <div className="container-nav">
          <Header />
        </div> 
        <Hero />
      </div>
      <Logos />
      <Features />
      <HowDoesItWork />
      <TransferPayment />
      <Testimonials />
      <Faq />
      <Subscribe />
      <Footer />
    </>
  )
}

export default Home
