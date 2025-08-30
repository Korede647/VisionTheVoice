
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "./css/signup.css"
import "./css/style.css"
import "./css/transitions.css"
import SignLogo from "../assets/img/logo-navcopy.png"
import Google from "../assets/img/Platform=Google, Shape=Original, Colored=True.png"
import Facebook from "../assets/img/Platform=Facebook, Shape=Original, Colored=True.png"

interface User {
  name: string;
  email: string;
  password: string;
  createdAt: string;
}

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
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

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    const trimmedConfirmPassword = confirmPassword.trim();

    // Basic validation
    if (!trimmedName) {
      alert('Please enter your full name');
      return;
    }

    if (!trimmedEmail) {
      alert('Please enter your email');
      return;
    }

    if (!trimmedPassword) {
      alert('Please enter a password');
      return;
    }

    if (trimmedPassword !== trimmedConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (trimmedPassword.length < 6) {
      alert('Password must be at least 6 characters long');
      return;
    }

    // Get existing users from localStorage
    const existingUsers: User[] = JSON.parse(localStorage.getItem('userAccounts') || '[]');

    // Check if email already exists
    const userExists = existingUsers.find((user) => user.email === trimmedEmail);
    if (userExists) {
      alert('An account with this email already exists. Please login instead.');
      return;
    }

    // Create new user object
    const newUser: User = {
      name: trimmedName,
      email: trimmedEmail,
      password: trimmedPassword, // Note: In production, hash passwords!
      createdAt: new Date().toISOString(),
    };

    // Add new user to the array
    existingUsers.push(newUser);

    // Save to localStorage
    localStorage.setItem('userAccounts', JSON.stringify(existingUsers));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', trimmedName);
    localStorage.setItem('userEmail', trimmedEmail);

    // Redirect to Get Started page
    navigate('/get-started');
  };

  return (
    <section className='div'>
    <div className="login-box reveal" ref={revealRef}>
      <img src={SignLogo} alt="Logo" className="login-logo" />
      <h2>Sign Up for VisionTheVoice</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <div>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div className="divider">
        <hr />
        <p className="or-divider">or sign up with</p>
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
        Already have an account? <NavLink to="/login">Log in</NavLink>
      </p>
    </div>
    </section>
  );
};

export default SignUp;