import React from "react";
import { motion } from "framer-motion";
import {
  Sun,
  Zap,
  ShieldCheck,
  TrendingUp,
  Leaf,
  Bolt,
  Phone,
} from "lucide-react";
import "../styles/HeroSection.css";
// import NavigationBar from "./NavigationBar.jsx";
import Logo from "../assets/images/logo.jpeg"; // <-- Import your logo

const HeroSection = () => (
  <section id="hero" className="hero-section">
    {/* <NavigationBar /> */}

    {/* Background Logo */}
    <motion.img
      src={Logo}
      alt="Company Logo"
      className="hero-logo-bg"
      // initial={{ opacity: 0, x: -50 }}
      // animate={{ opacity: 0.15, x: 0 }}
      // transition={{ duration: 1 }}
    />

    {/* Rotating Sun */}
    <motion.div
      className="hero-sun"
      animate={{ rotate: 360 }}
      transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    >
      <Sun size={400} className="hero-sun-icon" />
    </motion.div>

    {/* Main Content */}
    <div className="hero-content">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-badge"
      >
        <span>
          <Zap size={26} className="hero-badge-icon" />
          Sun Max Energy
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hero-title"
      >
        Power Your Life With{" "}
        <span className="hero-title-highlight">The Sun</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="hero-description"
      >
        Sun Max energy (Pvt.) Ltd. Reliable Solar Panel Suppliers in Sri Lanka.
        Investment your future
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <button
          className="hero-button-analysis"
          onClick={() => {
            const section = document.getElementById("gallery");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Explore Our Services
          <Bolt size={20} className="hero-button-icon" />
        </button>
        <a href="tel:+94769436431" className="hero-button-call-link">
          <button className="hero-button-call">
            Call Us Today
            <Phone size={20} className="hero-button-icon" />
          </button>
        </a>
      </motion.div>

      <motion.div
        className="hero-features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="hero-feature-item">
          <ShieldCheck size={18} className="hero-feature-icon" />
          25-Year Warranty
        </div>
        <div className="hero-feature-item">
          <TrendingUp size={18} className="hero-feature-icon" />
          90% Savings Potential
        </div>
        <div className="hero-feature-item">
          <Leaf size={18} className="hero-feature-icon" />
          Carbon Neutral Installations
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
