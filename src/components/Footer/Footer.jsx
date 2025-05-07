import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li><a href="#">Technology</a></li>
            <li><a href="#">Lifestyle</a></li>
            <li><a href="#">Travel</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
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

