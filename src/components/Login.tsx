import "./css/login.css"
import "./css/style.css"
import "./css/transitions.css"
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginLogo from "../assets/img/logo-navcopy.png"
import Google from "../assets/img/Platform=Google, Shape=Original, Colored=True.png"
import Facebook from "../assets/img/Platform=Facebook, Shape=Original, Colored=True.png"

interface User {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const revealRef = useRef<HTMLDivElement>(null);

  // Scroll reveal effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (revealRef.current) {
      observer.observe(revealRef.current);
    }

    return () => {
      if (revealRef.current) {
        observer.unobserve(revealRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    // Get existing users from localStorage
    const existingUsers: User[] = JSON.parse(localStorage.getItem('userAccounts') || '[]');

    // Find user with matching email and password
    const user = existingUsers.find(
      (user) => user.email === trimmedEmail && user.password === trimmedPassword
    );

    setTimeout(() => {
      if (user) {
        // Store login status in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userName', user.name);
        localStorage.setItem('userEmail', user.email);

        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        alert('Invalid credentials. Please check your email and password, or sign up for a new account.');
      }
      setIsLoading(false);
    }, 500); // Simulate loading delay
  };

  return (
    <div className="login-box reveal" ref={revealRef}>
      {isLoading && (
        <div className="loading-screen active">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      )}
      <img src={LoginLogo} alt="Logo" className="login-logo" />
      <h2>Login to VisionTheVoice</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Continue</button>
      </form>
      <div className="divider">
        <hr />
        <p className="or-divider">or sign in with</p>
        <hr />
      </div>
      <div className="social-login">
        <img
          className="Google"
          src={Google}
          alt=""
        />
        <img
          src={Facebook}
          alt=""
        />
      </div>
      <p className="login-link">
        Don't have an account? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </div>
  );
};

export default Login;