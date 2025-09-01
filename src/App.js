import React from "react";
import NavigationBar from "./components/NavigationBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import StatsSection from "./components/StatsSection";
import FeaturesSection from "./components/FeaturesSection.jsx";
import ProcessSection from "./components/ProcessSection";
import GoogleStyleReviews from "./components/TestimonialSection";
import GallerySection from "./components/GallerySection";
import FAQSection from "./components/FAQSection";
import CTA from "./components/CTA";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Photos from "./components/Photos.jsx";
import LoanCalculator from "./components/LoanCalculator.jsx";
import TopBar from "./components/MiniBar.jsx";
import CallButton from "./components/CallButton.jsx";


import "./App.css";

function App() {
  return (
    <div className="app-container">
      {/* <NavigationBar /> */}
      <CallButton />
      <TopBar />
      <NavigationBar />
      <HeroSection />
      <StatsSection />
      <LoanCalculator />
      <FeaturesSection />
      <ProcessSection />
      <Photos />
      <GoogleStyleReviews />
      <GallerySection />
      <FAQSection />
      <CTA />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
