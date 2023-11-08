import { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
            <div className="bar" />
            <div className="bar" />
            <div className="bar" />
          </div>
          <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
            <li className="navbar-item">
              <Link to="/" className="navbar-links" onClick={toggleNavbar}>
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" className="navbar-links" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

export default Navbar;