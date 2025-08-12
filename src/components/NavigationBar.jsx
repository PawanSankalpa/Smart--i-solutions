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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  // Toggle mobile menu
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
        <img src="/loloMain.jpeg" alt="logo" />
      </div>

      {/* Hamburger / Close icon */}
      <div className="menu-toggle" onClick={handleToggle} onTouchStart={handleToggle}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a className="home-link" onClick={() => scrollToSection("hero")}>Home</a>
        <a className="stats-link" onClick={() => scrollToSection("stats")}>Stats</a>
        <a className="features-link" onClick={() => scrollToSection("features")}>Features</a>
        <a className="process-link" onClick={() => scrollToSection("process")}>Process</a>
        <a className="testemonial-link" onClick={() => scrollToSection("testimonials")}>Testimonials</a>
        <a className="gallery-link" onClick={() => scrollToSection("gallery")}>Gallery</a>
        <a className="FAQ-link" onClick={() => scrollToSection("faq")}>FAQ</a>
        <a className="get-started-link" onClick={() => scrollToSection("cta")}>Get Started</a>
        <a className="contact-link" onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
