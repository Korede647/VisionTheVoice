import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/style.css"
import "./css/responsive.css"
import "./css/transitions.css"
import First from "../assets/img/first.png"
import Vector from "../assets/img/Vector 2 copy.png"
import Last from "../assets/img/last.jpg"

const Features: React.FC = () => {
  return (
    <section id="features" className="section reveal">
      <div className="container">
        <h2 className="section-title">All the tools to grow your show</h2>

        <div className="row reveal">
          <div className="card-img">
            <img src={First} alt="Audience growth tools UI" className="first" />
          </div>
          <div>
            <h3>Build a dedicated following</h3>
            <p className="lead">
              Reach new listeners with smart distribution, SEO-ready show pages, and audience messaging tools.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> One-click distribution to major platforms
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Listener CRM & fan messaging
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Advanced analytics & retention charts
              </li>
            </ul>
            <p>
              <NavLink to="/growth" className="btn ghost">
                Learn more
              </NavLink>
            </p>
          </div>
        </div>

        <div className="row reveal" id="inverse">
          <div>
            <h3>Earn on your show</h3>
            <p className="lead">
              Monetize with sponsor marketplace, paid subscriptions, and tips — for both audio and video.
            </p>
            <ul className="feature-list">
              <li>
                <i className="fa-solid fa-check"></i> Automated ad insertion & inventory
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Memberships, bonus episodes & gated RSS
              </li>
              <li>
                <i className="fa-solid fa-check"></i> Payouts to bank or wallet
              </li>
            </ul>
            <p>
              <NavLink to="/monetize" className="btn ghost">
                See how it works
              </NavLink>
            </p>
          </div>
          <div className="card-img">
            <img src={Vector} alt="Monetization dashboard" className="middle" />
          </div>
        </div>

        <div className="row reveal">
          <div className="card-img">
            <img src={Last} alt="Show customization tools" className="last" />
          </div>
          <div>
            <h3>Stand out with video & branding</h3>
            <p className="lead">
              Customize your show page, thumbnails, video trims, and highlight reels to captivate viewers.
            </p>
            <div className="feature-grid">
              <div className="feature">
                <h4>Video Highlights</h4>
                <p>Auto-generate shorts for social in one click.</p>
              </div>
              <div className="feature">
                <h4>Brand Kit</h4>
                <p>Colors, fonts, and templates synced across assets.</p>
              </div>
              <div className="feature">
                <h4>Collab Studio</h4>
                <p>Invite co-hosts and guests, record remotely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;