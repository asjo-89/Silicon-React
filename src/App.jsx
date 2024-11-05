import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Features from './components/Features'


function App() {  
  
  

  return (

    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}>Home</Route>
              <Route path="/features" element={<Features />}>Features</Route>
              <Route path="/contact" element={<Contact />}>Contact</Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
