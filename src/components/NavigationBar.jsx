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
      setIsOpen(false); // close menu on mobile
    }
  };

  // Add scroll shadow or background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
        <img src="/loloMain.png" alt="logo" />
      </div>

      {/* Hamburger / Close icon */}
      <div className="menu-toggle" onClick={handleToggle} onTouchStart={handleToggle}>
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
        <a onClick={() => scrollToSection("cta")}>Get Started</a>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default NavigationBar;
