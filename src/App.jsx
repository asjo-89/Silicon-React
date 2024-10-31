import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Logos from './components/Logos'
import Features from './components/Features'
import HowDoesItWork from './components/HowDoesItWork'
import TransferPayment from './components/TransferPayment'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

function App() {
  return (
    <div className="wrapper">
      <section className="hero">
        <Header />
        <Hero />
        <Logos />
      </section>
      <Features />
      <HowDoesItWork />
      <TransferPayment />
      <Testimonials />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
