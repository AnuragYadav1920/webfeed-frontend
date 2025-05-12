import React from 'react';
import {Link} from "react-router-dom"
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><Link to="/our-story">Our Story</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Important Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>C - 41 sector 63A</p>
          <p>Noida, India</p>
          <p><a href="tel:+1234567890">+91 6387208361</a></p>
          <p><a href="mailto:info@blog.com">www.webfeed.com</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} WebFeed. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

