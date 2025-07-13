import React, { useState } from "react";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on mobile
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollToSection("hero")}>
        <img src="/loloMain.png" alt="logo" />
      </div>
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
      <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
  );
};

export default NavigationBar;
