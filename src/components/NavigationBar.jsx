import React, { useState, useEffect } from "react";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="navbar-section">
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
          <img src="/loloMain.jpeg" alt="logo" />
        </div>

        {/* Hamburger / Close icon */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection("hero")}>Home</a>
          <a onClick={() => scrollToSection("stats")}>Stats</a>
          <a onClick={() => scrollToSection("features")}>Features</a>
          <a onClick={() => scrollToSection("process")}>Process</a>
          <a onClick={() => scrollToSection("testimonials")}>Testimonials</a>
          <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("faq")}>FAQ</a>
          <a onClick={() => scrollToSection("cta")} className="get-started-link">
            Get Started
          </a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
