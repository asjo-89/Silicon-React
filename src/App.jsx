import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTheme } from './contexts/ThemeContext'


import Home from './pages/Home'
import Contact from './pages/Contact'
import Features from './components/Features'


function App() {

  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        {/* <Route path="/features" element={<Features />}>Features</Route> */}
        <Route path="/contact" element={<Contact />}>Contact</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
