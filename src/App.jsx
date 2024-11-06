import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Contact from './pages/Contact'
// import Header from './components/Header'
// import Footer from './components/Footer'
import Features from './components/Features'


function App() {  
  
  
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

    <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home toggleTheme={toggleTheme} isDark={isDark} />}>Home</Route>
              <Route path="/features" element={<Features toggleTheme={toggleTheme} isDark={isDark} />}>Features</Route>
              <Route path="/contact" element={<Contact toggleTheme={toggleTheme} isDark={isDark} />}>Contact</Route>
            </Routes>
    </BrowserRouter>
  )
}

export default App
