import React from "react";
import "../styles/StatsSection.css";

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-item">
          <h3 className="stat-number">10+</h3>
          <p className="stat-label">Solar Panels Installed</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">4.9★</h3>
          <p className="stat-label">Customer Satisfaction</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">Rs 10K</h3>
          <p className="stat-label">Client Savings</p>
        </div>
        <div className="stat-item">
          <h3 className="stat-number">24/7</h3>
          <p className="stat-label">Monitoring Support</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection; 