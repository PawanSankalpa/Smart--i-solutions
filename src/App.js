import React from "react";
// import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection.jsx";
import ProcessSection from "./components/ProcessSection";
import TestimonialSection from "./components/TestimonialSection";
import GallerySection from "./components/GallerySection";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* <NavigationBar /> */}
      <HeroSection />
      <StatsSection />
       <FeaturesSection />
      <ProcessSection />
      <TestimonialSection />
      <GallerySection />
      <FAQSection />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
