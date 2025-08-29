import React from 'react';
import { NavLink } from 'react-router-dom';
import "./css/style.css"
import "./css/responsive.css"
import "./css/transitions.css"

const GetStarted: React.FC = () => {
  return (
    <section className="band section reveal" id="get-started">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
          <NavLink to="/get-started" className="btn">
            Start free — no card needed
          </NavLink>
        </div>
        <div className="band-cards">
          <div className="tile">
            <h3>Interested in audio podcasts?</h3>
            <p className="small">
              Distribute everywhere, track growth, and engage your listeners — no matter where you’re hosted.
            </p>
            <div>
              <NavLink to="/features" className="btn ghost">
                Learn more
              </NavLink>
              <img src="/img/ri_mic-ai-fill.png" alt="" className="GS-icon" />
            </div>
          </div>
          <div className="tile">
            <h3>Looking to add video?</h3>
            <p className="small">
              Bring video to the forefront with uploads, chapters, and short-form highlight exports.
            </p>
            <div>
              <NavLink to="/features" className="btn ghost">
                Learn more
              </NavLink>
              <img src="/img/ph_video-fill.png" alt="" className="GS-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;