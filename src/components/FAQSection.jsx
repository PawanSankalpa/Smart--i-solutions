import React, { useState } from "react";
import "../styles/FAQSection.css";

const ChevronDown = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How much does a solar panel system cost?",
      answer:
        "The average residential system costs between Rs.15,000- Rs.25,000 before incentives. However, with federal tax credits and local rebates, most homeowners pay 30-50% less. We offer flexible financing options with $0 down programs available."
    },
    {
      question: "How long does installation take?",
      answer:
        "Most residential installations are completed in 1-3 days after permits are approved. The entire process from consultation to activation typically takes 4-8 weeks depending on your location and utility requirements."
    },
    {
      question: "Do solar panels work during power outages?",
      answer:
        "Standard grid-tied systems shut off during outages for safety. However, when paired with our battery storage solutions, you can maintain power during outages. We offer Tesla Powerwall and other premium storage options."
    },
    {
      question: "What maintenance do solar panels require?",
      answer:
        "Solar panels require minimal maintenance. We recommend an annual inspection and occasional cleaning if you live in a dusty area. Our systems include monitoring to alert you of any performance issues."
    },
    {
      question: "How long do solar panels last?",
      answer:
        "Our premium panels are warrantied for 25 years and typically continue producing at reduced capacity for 35+ years. Inverters may need replacement after 10-15 years, which we include in our maintenance plans."
    }
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Answers to common questions about going solar</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <ChevronDown className={`chevron ${activeIndex === index ? "rotated" : ""}`} />
              </div>
              {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; /* Make sure to create FAQSection.css */