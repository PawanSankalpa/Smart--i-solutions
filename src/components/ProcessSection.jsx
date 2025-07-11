import React from "react";
import "../styles/ProcessSection.css";
import { motion } from "framer-motion";
import { Phone, Home, HardHat, Zap, Bolt } from "lucide-react";

const processSteps = [
  {
    step: "1",
    title: "Free Consultation",
    description: "Our solar experts assess your needs and provide a customized quote",
    icon: <Phone size={24} />,
  },
  {
    step: "2",
    title: "Custom Design",
    description: "Engineers create a system optimized for your property's unique characteristics",
    icon: <Home size={24} />,
  },
  {
    step: "3",
    title: "Permitting",
    description: "We handle all paperwork and approvals with your local authorities",
    icon: <HardHat size={24} />,
  },
  {
    step: "4",
    title: "Installation",
    description: "Certified technicians install your system with minimal disruption",
    icon: <Zap size={24} />,
  },
  {
    step: "5",
    title: "Activation",
    description: "System commissioning and orientation on monitoring your production",
    icon: <Bolt size={24} />,
  },
];

const ProcessSection = () => (
  <section className="process-section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <h2 className="section-title">Our Simple 5-Step Process</h2>
        <p className="section-subtitle">
          From initial consultation to flipping the switch, we make going solar effortless
        </p>
      </motion.div>

      <div className="timeline">
        <div className="timeline-line"></div>

        <div className="timeline-steps">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="step-number">{step.step}</div>

              <div className="step-card">
                <div className="step-content">
                  <div className="step-header">
                    <div className="step-icon">{step.icon}</div>
                    <h3 className="step-title">{step.title}</h3>
                  </div>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
