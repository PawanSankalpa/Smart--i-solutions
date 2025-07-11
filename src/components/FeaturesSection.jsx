import React from "react";
import { Sun, ChartCandlestick, ShieldCheck, BatteryCharging, Leaf, Bolt, HandCoins } from "lucide-react";
import "../styles/FeaturesSection.css";

const features = [
  {
    icon: <Sun size={50} />,
    title: "Clean Energy",
    description: "Harness the power of the sun with our premium solar panels that reduce your carbon footprint by up to 80%.",
  },
  {
    icon: <HandCoins size={50} />,
    title: "Cost Effective",
    description: "Our systems typically pay for themselves in 5-7 years with savings up to 90% on electricity bills.",
  },
  {
    icon: <Leaf size={50} />,
    title: "Eco Friendly",
    description: "Each installation prevents 3-4 tons of CO2 emissions annually - equivalent to planting 100 trees.",
  },
  {
    icon: <BatteryCharging  size={50}/>,
    title: "Energy Storage",
    description: "Optional battery solutions to store excess energy for use during peak hours or outages.",
  },
  {
    icon: <ShieldCheck size={50} />,
    title: "25-Year Warranty",
    description: "Industry-leading protection on panels and 10-year warranty on workmanship.",
  },
  {
    icon: <ChartCandlestick size={50}/>,
    title: "Increase Property Value",
    description: "Homes with solar sell 20% faster and for 4.1% more on average.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="features-header">
        <h2>Why Solar Horizon Stands Out</h2>
        <p>We're not just another solar company - we're your energy transformation partners</p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-content">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}