import React from 'react';
import '../styles/TestimonialSection.css';

const testimonials = [
  {
    name: 'Siripala',
    role: 'Homeowner, Matara, Kamburupitiya',
    quote: 'Our electricity bill went from $280 to $12 in the first month! The installation was seamless and the team was incredibly professional.',
    stars: 5,
  },
  {
    name: 'Sumanaseena',
    role: 'Small Business Owner',
    quote: 'The commercial solar array has saved us over Rs.45,000 annually. Best investment we\'ve made for our business.',
    stars: 5,
  },
  {
    name: 'Hettiaarachchi Family',
    role: 'Farm Owners',
    quote: 'Powering our entire farm with solar has given us energy independence and predictable costs for decades to come.',
    stars: 5,
  },
];

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="gold"
    stroke="gold"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-header">
        <h2>What Our Customers Say</h2>
        <p>Don't just take our word for it - hear from homeowners and businesses who made the switch</p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-stars">
              {[...Array(testimonial.stars)].map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="testimonial-name">{testimonial.name}</div>
            <div className="testimonial-role">{testimonial.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection; /* Save this as TestimonialSection.jsx */