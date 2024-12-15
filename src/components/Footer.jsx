import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo or Brand Name */}
        <div className="footer-logo">
          <h2>BULDAK FIRE NOODLES</h2>
        </div>
        {/* Navigation Links */}
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        {/* Social Media Icons */}
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/ic_baseline-facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/devicon_twitter.png" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="src/assets/ri_instagram-fill.png" alt="Instagram" />
          </a>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="footer-copyright">
      </div>
    </footer>
  );
};

export default Footer;
