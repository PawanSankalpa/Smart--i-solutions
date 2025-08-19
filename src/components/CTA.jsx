import React from "react";
import { Zap, Sun, Phone } from "lucide-react";
import "../styles/CTA.css";

const CTA = () => (
  <section id="cta" className="cta-section">
    <div className="cta-container">
      <div className="cta-content">
        <Zap className="cta-icon" size={48} />
        <h2 className="cta-heading">Ready to Start Your Solar Journey?</h2>
        <p className="cta-text">
          Get a free, no-obligation quote today and discover how much you could
          save with solar energy.
        </p>
        <div className="cta-buttons">
          <a
            href="mailto:sunmax.solar.srilanka@gmail.com"
            style={{ textDecoration: "none" }}
          >
            <button className="cta-button-primary">
              Email an Expert <Sun className="cta-button-icon" size={20} />
            </button>
          </a>
          <a
            href="tel:+94713848336"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <button className="cta-button-secondary">
              Speak With an Expert{" "}
              <Phone className="cta-button-icon" size={20} />
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
