import React from "react";
import { Zap, Sun, Phone } from "lucide-react";
import "../styles/CTA.css";

const CTA = () => (
  <section className="cta-section">
    <div className="cta-container">
      <div className="cta-content">
        <Zap className="cta-icon" size={48} />
        <h2 className="cta-heading">Ready to Start Your Solar Journey?</h2>
        <p className="cta-text">
          Get a free, no-obligation quote today and discover how much you could save with solar energy.
        </p>
        <div className="cta-buttons">
          <button className="cta-button-primary">
            Get Your Free Quote <Sun className="cta-button-icon" size={20} />
          </button>
          <button className="cta-button-secondary">
            Speak With an Expert <Phone className="cta-button-icon" size={20} />
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;