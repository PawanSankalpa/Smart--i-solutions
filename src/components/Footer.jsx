import React from 'react';
import "../styles/Footer.css";

// Inline SVG for Facebook icon
const FacebookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Inline SVG for Twitter icon
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

// Inline SVG for Instagram icon
const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Inline SVG for Linkedin icon
const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container">
      <div className="footer-grid">
        <div className="footer-col">
          <h3 className="footer-heading">SMART I-SOLUTIONS</h3>
          <p className="footer-description">
            Leading the renewable energy revolution with premium solar solutions for homes and businesses.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Services</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Residential Solar</a></li>
            <li><a href="#" className="footer-link">Commercial Solar</a></li>
            <li><a href="#" className="footer-link">Solar Batteries</a></li>
            <li><a href="#" className="footer-link">System Monitoring</a></li>
            <li><a href="#" className="footer-link">Maintenance</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Our Team</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">Press</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Legal</h3>
          <ul className="footer-links">
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">Financing Options</a></li>
            <li><a href="#" className="footer-link">Warranty</a></li>
            <li><a href="#" className="footer-link">Sitemap</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SMART I-SOLUTIONS. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
