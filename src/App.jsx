import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from "./components/Home/main";
import Navbar from "./components/Navbar/main"
import Footer from "./components/Footer/main"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes> 
            /* Root path to main route */
            <Route exact path="/" element={<Home/>} />
            /* Subsites */
            <Route exact path="/example" element={<Home/>} />
            /* 404 error catch, if everything else fails then redirect to root path aka. Main site */
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
