import React from 'react';
import '../styles/MiniBar.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <a href="mailto:info@sunmaxenergy.lk" className="top-bar-email">
          info@sunmaxenergy.lk
        </a>
        <div className="top-bar-socials">
          <a href="https://www.facebook.com/share/1CLvCCpxNX/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}
