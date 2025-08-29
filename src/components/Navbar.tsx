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
            <NavLink to="/features" className={({ isActive }) => (isActive ? 'active' : '')}>
              Features
            </NavLink>
            <NavLink to="/resources" className={({ isActive }) => (isActive ? 'active' : '')}>
              Resources
            </NavLink>
            <NavLink to="/pricing" className={({ isActive }) => (isActive ? 'active' : '')}>
              Pricing
            </NavLink>
            <NavLink to="/testimonials" className={({ isActive }) => (isActive ? 'active' : '')}>
              Stories
            </NavLink>
            <NavLink to="/help" className={({ isActive }) => (isActive ? 'active' : '')}>
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