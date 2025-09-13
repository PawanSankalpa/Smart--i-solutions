// App.jsx (with API fetching and loader simulation)
import React, { useState, useEffect } from 'react';
import NavigationBar from './components/NavigationBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection.jsx';
import ProcessSection from './components/ProcessSection';
import GoogleStyleReviews from './components/TestimonialSection';
import GallerySection from './components/GallerySection';
import FAQSection from './components/FAQSection';
import CTA from './components/CTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Photos from './components/Photos.jsx';
import LoanCalculator from './components/LoanCalculator.jsx';
import TopBar from './components/MiniBar.jsx';
import CallButton from './components/CallButton.jsx';
import Loader from './components/Loader.jsx';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate API delay (3 seconds) to test loader
        await new Promise((resolve) => setTimeout(resolve, 3000));

        // Example API call (replace with your actual endpoint)
        const response = await fetch('https://api.example.com/testimonials');
        const data = await response.json();

        setTestimonials(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Hide loader even on error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <CallButton />
          <TopBar />
          <NavigationBar />
          <HeroSection />
          <StatsSection />
          <LoanCalculator />
          <FeaturesSection />
          <ProcessSection />
          <Photos />
          <GoogleStyleReviews testimonials={testimonials} />
          <GallerySection />
          <FAQSection />
          <CTA />
          <ContactSection />
          <Footer /> */}
        </>
      )}
    </div>
  );
}

export default App;
