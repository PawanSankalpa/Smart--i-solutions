import React from "react";
import "../styles/ContactSection.css";
import { color } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact Sun Max Energy</h2>
          <p>
            Have questions or ready to get started? Our solar experts are here
            to help you every step of the way.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <a
              href="https://www.google.com/maps/place/Rahula+Junction/@5.9523734,80.4989682,14z/data=!4m10!1m2!2m1!1sNo.+41%2FA1,+Rahula+Junction,+Matara!3m6!1s0x3ae13f2fb1ab7737:0x5c9abf1d5eb3b29!8m2!3d5.9530207!4d80.5348519!15sCiJOby4gNDEvQTEsIFJhaHVsYSBKdW5jdGlvbiwgTWF0YXJhWiEiH25vIDQxIGExIHJhaHVsYSBqdW5jdGlvbiBtYXRhcmGSAQhidXNfc3RvcJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOMGJVNDNXWEpSUlJBQqoBVhABKgwiCG5vIDQxIGExKAAyHxABIhtJ69NO5VMzWS99Zh1VWdQqnGS5pH0bP3z4R1gyIxACIh9ubyA0MSBhMSByYWh1bGEganVuY3Rpb24gbWF0YXJh4AEA-gEECAAQMw!16s%2Fg%2F11h1d95db?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                cursor: "pointer",
                display: "inline-block",
              }}
            >
              <div
                style={{
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <h3>Matara Head Office</h3>
                <p>No. 41/A1, Rahula Junction, Matara</p>
              </div>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+947066037207" style={{ textDecoration: "none" }}>
              <div>
                <h3>Call Us</h3>

                <p>+94 7066037207</p>
              </div>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a
              href="mailto:sunmax.solar.srilanka@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div>
                <h3>Email Us</h3>
                <p>sunmax.solar.srilanka@gmail.com</p>
              </div>
            </a>
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
              <textarea
                id="message"
                rows="4"
                placeholder="Tell us about your solar needs..."
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection; /* ContactSection.module.css */
