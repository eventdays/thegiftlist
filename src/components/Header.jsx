import { useEffect } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import React from 'react';

const Header = () => {
  useEffect(() => {
    const themeToggle = document.getElementById('themeToggle');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    const anchors = document.querySelectorAll('a[href^="#"]');

    const smoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    };

    anchors.forEach((anchor) => anchor.addEventListener('click', smoothScroll));

    themeToggle.addEventListener('change', () => {
      document.body.setAttribute('data-theme', themeToggle.checked ? 'dark' : 'light');
    });

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    return () => {
      themeToggle.removeEventListener('change', null);
      hamburger.removeEventListener('click', null);
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <header>
      <nav>
        <NavLink to="/" className="logo">TheGiftList.com</NavLink>
        <div className="nav-links">
        <NavLink to="/how-it-works" className={({ isActive }) => (isActive ? 'active' : '')}>How It Works</NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
          <NavLink to="/faq" className={({ isActive }) => (isActive ? 'active' : '')}>FAQ</NavLink>
          {/* <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) => `cta-button ${isActive ? 'active' : ''}`}
          >
            Sign Up
          </NavLink> */}
          <NavLink
            to="/contact"
            className={({ isActive }) => `cta-button ${isActive ? 'active' : ''}`}
          >
            Contact Us
          </NavLink>
          <div className="theme-switch">
            <span className="theme-label">Dark Mode</span>
            <label className="switch">
              <input type="checkbox" id="themeToggle" />
              <span className="slider"></span>
            </label>
          </div>
        </div>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
