import React from "react";
import "../styles/ContactSection.css";
import { color } from "framer-motion";

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="contact-container">
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Contact Smart -i Solutions</h2>
          <p>
            Have questions or ready to get started? Our solar experts are here
            to help you every step of the way.
          </p>

          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <a
              href="https://www.google.com/maps/place/No+333D,+Welivita,+Kaduwela,+Sri+Lanka"
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
                <h3>Kaduwela Head Office</h3>
                <p>No 333D, Welivita, Kaduwela, Sri Lanka</p>
              </div>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <a href="tel:+94706070707" style={{ textDecoration: "none" }}>
              <div>
                <h3>Call Us</h3>

                <p>+94 706 070 707</p>
              </div>
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <a
              href="mailto:smartispl7@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <div>
                <h3>Email Us</h3>
                <p>smartispl7@gmail.com</p>
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
