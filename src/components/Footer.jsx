import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink or Link for internal routing

const Footer = () => {
  return (
    <footer>
      <div
        className="footer-content"
        style={{ display: 'flex', justifyContent: 'center', maxWidth: '1000px', margin: '0 auto' }}
      >
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><NavLink to="/about">About Us</NavLink></li>
            {/* <li><NavLink to="/team">Our Team</NavLink></li>
            <li><NavLink to="/careers">Careers</NavLink></li>
            <li><NavLink to="/press">Press Releases</NavLink></li> */}
            <li><NavLink to="/blog">Blog</NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/faq">FAQ</NavLink></li>
            {/* <li><NavLink to="/help">Help Center</NavLink></li>
            <li><NavLink to="/community">Community</NavLink></li> */}
            <li><NavLink to="/feedback">Feedback</NavLink></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><NavLink to="/terms">Terms of Service</NavLink></li>
            <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
            {/* <li><NavLink to="/data-policy">Data Policy</NavLink></li>
            <li><NavLink to="/cookies">Cookie Policy</NavLink></li>
            <li><NavLink to="/accessibility">Accessibility</NavLink></li> */}
          </ul>
        </div>
        <div className="footer-column">
          <h3>Features</h3>
          <ul>
            <li><NavLink to="/create-registry">Create Registry</NavLink></li>
            <li><NavLink to="/find-registry">Find Registry</NavLink></li>
            <li><NavLink to="/gift-ideas">Gift Ideas</NavLink></li>
            <li><NavLink to="/group-gifting">Group Gifting</NavLink></li>
            <li><NavLink to="/mobile-app">Mobile App</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 TheGiftList.com. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
