'use client';
import React from 'react';
import './Footer.css'; // Linked CSS for layout

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* Left: Logo + Tagline */}
        <div className="footer-logo">
          <img
            src="https://img.icons8.com/ios-filled/50/4e9bd3/hospital.png"
            alt="MedFindRx Logo"
            className="footer-icon"
          />
          <div>
            <h2 className="footer-title">
              <span className="text-blue">MedFind</span>Rx
            </h2>
            <p className="footer-tagline">
              One Platform for Smarter Pharmacy<br />
              Access & Operations.
            </p>
          </div>
        </div>

        {/* Right: 3 Columns on same line */}
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#">MedFindRx</a></li>
              <li><a href="#">Rx Manager Pro</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        © 2025 <strong>MedFindRx</strong>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
