import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from "./components/Home/main";
import Navbar from "./components/Navbar/main"
import Footer from "./components/Footer/main"
import Contact from "./components/Contact/main"
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
            <Route exact path="/contact" element={<Contact/>} />
            /* 404 error catch, if everything else fails then redirect to root path aka. Main site */
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
