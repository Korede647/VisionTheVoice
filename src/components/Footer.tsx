import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/style.css"
import "./css/responsive.css"
import "./css/transitions.css"
import FooterLogo from "../assets/img/logo-nav.png"

const Footer: React.FC = () => {
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thanks for subscribing!');
  };

  return (
    <footer id="help" className="reveal">
      <div className="container footer-grid">
        <div className="news">
          <div className="brand" style={{ marginBottom: '8px' }}>
            <img src={FooterLogo} alt="VisionTheVoice" />
            <span>VisionTheVoice</span>
          </div>
          <p className="small">
            Join our creator newsletter for tips, templates, and partner offers.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email"
              required
            />
            <button className="btn" type="submit">
              Subscribe
            </button>
          </form>

            <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '22px',
          color: '#a89ec1',
        }}
      >
        <small>© 2025 Creator Flow</small>
      </div>
        </div>

        <div>
          <ul>
            <li>
              <h4 style={{ margin: '0 0 10px' }}>Company</h4>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/press">Press</NavLink>
            </li>
            <li>
              <NavLink to="/careers">Careers</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4 style={{ margin: '0 0 10px' }}>Resources</h4>
            </li>
            <li>
              <NavLink to="/help-center">Help Center</NavLink>
            </li>
            <li>
              <NavLink to="/community">Community</NavLink>
            </li>
            <li>
              <NavLink to="/templates">Templates</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4 style={{ margin: '0 0 10px' }}>Legal</h4>
            </li>
            <li>
              <NavLink to="/privacy">Privacy</NavLink>
            </li>
            <li>
              <NavLink to="/terms">Terms</NavLink>
            </li>
            <li>
              <NavLink to="/cookies">Cookies</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <h4 style={{ margin: '0 0 10px' }}>Creator Tools</h4>
            </li>
            <li>
              <NavLink to="/sponsor-hub">Sponsor Hub</NavLink>
            </li>
            <li>
              <NavLink to="/video-studio">Video Studio</NavLink>
            </li>
            <li>
              <NavLink to="/analytics">Analytics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    
    </footer>
  );
};

export default Footer;