import React from "react";
import "../styles/StatsSection.css";

const StatsSection = () => (
  <section id="stats" className="stats-section">
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-item">
          <h3 className="stat-number">7+</h3>
          <p className="stat-label">
            Years of Experience <br />
            in Solar Panel Installation
          </p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">4.9★</h3>
          <p className="stat-label">
            Customer Satisfaction <br />
            Rated by 500+ Clients
          </p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">Rs 10K</h3>
          <p className="stat-label">
            Average Client Savings <br />
            on Energy Bills per Month
          </p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">24/7</h3>
          <p className="stat-label">
            Monitoring & Support <br />
            Anytime, Anywhere
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
