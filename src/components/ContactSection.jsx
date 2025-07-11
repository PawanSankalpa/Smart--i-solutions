import React from "react";
import "../styles/ContactSection.css";

const ContactSection = () => (
  <section className="contact-section">
    <div className="contact-container">
      <div className="contact-grid">

        <div className="contact-info">
          <h2>Contact Smart -i Solutions</h2>
          <p>
            Have questions or ready to get started? Our solar experts are here to help you every step of the way.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <h3>Our Headquarters</h3>
              <p>123 Solar Way, Austin, TX 78704</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <h3>Call Us</h3>
              <p>(512) 555-SOLAR</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <h3>Email Us</h3>
              <p>hello@solarhorizon.com</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Your name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="(123) 456-7890" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="4" placeholder="Tell us about your solar needs..."></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  </section>
);

export default ContactSection; /* ContactSection.module.css */