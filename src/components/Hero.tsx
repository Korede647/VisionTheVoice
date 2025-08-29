import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/style.css"
import "./css/responsive.css"
import "./css/transitions.css"

const Hero: React.FC = () => {
  return (
    <>
    <header className="hero reveal">
      <div className="container hero-inner">
        <div className="hero-space">
          <span className="badge">
            <i className="fa-solid fa-podcast"></i> Creator Flow • Podcasts
          </span>
          <h1>Make your show the next big thing</h1>
          <p>
            Upload, distribute, monetize, and grow your audio or video podcast from
            one dashboard — built for creators who want control and clarity.
          </p>
          <div className="actions">
            <NavLink to="/get-started" className="btn">
              Get Started
            </NavLink>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Hero;