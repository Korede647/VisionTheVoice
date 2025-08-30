import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/style.css"
import "./css/responsive.css"
import "./css/transitions.css"
import Logo from "../assets/img/logo-nav.png"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

   const handleScroll = (id: string) => {
    // Close mobile menu if open
    setIsMenuOpen(false);

    // Only scroll if on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="nav-wrap">
      <div className="container">
        <nav aria-label="Primary">
          <NavLink className="brand" to="/">
            <img src={Logo} alt="Creator Flow logo" />
            <span>VisionTheVoice</span>
          </NavLink>
          <button
            className="hamburger"
            id="menuBtn"
            aria-label="Open menu"
            onClick={toggleMenu}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div
            className={`nav-links ${isMenuOpen ? 'block' : 'hidden'}`}
            id="navLinks"
          >
             <NavLink
              to="/features"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll('features');
                }
              }}
            >
            Features
            </NavLink>
              <NavLink
              to="/resources"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll('resources');
                }
              }}
            >
              Resources
            </NavLink>
            <NavLink
              to="/pricing"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll('pricing');
                }
              }}
            >
              Pricing
            </NavLink>
            <NavLink
              to="/testimonials"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll('testimonials');
                }
              }}
            >
              Stories
            </NavLink>
            <NavLink
              to="/help"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  handleScroll('help');
                }
              }}
            >
              Help
            </NavLink>
            <div className="nav-cta" id="phone">
              <NavLink to="/login" className="btn ghost">
                Sign in
              </NavLink>
              <NavLink to="/signup" className="btn">
                Sign up
              </NavLink>
            </div>
          </div>
          <div className="nav-cta" id="desk">
            <NavLink to="/login" className="btn ghost">
              Sign in
            </NavLink>
            <NavLink to="/signup" className="btn">
              Sign up
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;