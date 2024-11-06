import React, { useEffect, useState } from 'react'

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

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }


  const [isDark, setIsDark] = useState(() => {
    const savedIsDark = localStorage.getItem('isDark');

    if (savedIsDark === null) return false;

    try {
        return JSON.parse(savedIsDark);
    } catch (error) {
        console.error("Error parsing isDark value from localStorage:", error);
        return false; 
    }
  });


  if(!isDark) {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
  else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  }


  useEffect(() => {
      localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark] );

  
  return (
    <>
      <div className="wrapper">
        <Header toggleTheme={toggleTheme} isDark={isDark} /> 
        <Hero isDark={isDark} />
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
