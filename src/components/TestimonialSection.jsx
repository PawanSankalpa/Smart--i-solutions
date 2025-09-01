import React, { useState } from 'react';
import '../styles/TestimonialSection.css';

const GoogleStyleReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const reviews = [
    {
      name: 'Siripala',
      date: '2 weeks ago',
      rating: 5,
      review: 'Our electricity bill went from $280 to $12 in the first month! The installation was seamless and the team was incredibly professional.',
      avatar: 'S',
      location: 'Matara, Kamburupitiya',
      verified: true
    },
    {
      name: 'Sumanaseena',
      date: '1 month ago',
      rating: 5,
      review: "The commercial solar array has saved us over Rs.45,000 annually. Best investment we've made for our business.",
      avatar: 'S',
      location: 'Small Business Owner',
      verified: true
    },
    {
      name: 'Hettiaarachchi Family',
      date: '3 months ago',
      rating: 5,
      review: 'Powering our entire farm with solar has given us energy independence and predictable costs for decades to come.',
      avatar: 'H',
      location: 'Farm Owners',
      verified: true
    },
    {
      name: 'Rajapaksa Residence',
      date: '2 months ago',
      rating: 5,
      review: 'We not only eliminated our electricity bill but also earn credit by sending excess power back to the grid.',
      avatar: 'R',
      location: 'Family Home, Colombo',
      verified: true
    },
    {
      name: 'Perera Textiles',
      date: '5 months ago',
      rating: 5,
      review: 'The solar installation paid for itself in just 3 years. Now we have virtually no energy costs for the next 20+ years.',
      avatar: 'P',
      location: 'Manufacturing Business',
      verified: true
    },
    {
      name: 'Wickramasinghe Villa',
      date: '1 month ago',
      rating: 5,
      review: 'The solar panels blend beautifully with our roof and have significantly increased our property value.',
      avatar: 'W',
      location: 'Luxury Home, Galle',
      verified: true
    },
    {
      name: 'Jayawardene Apartment Complex',
      date: '3 weeks ago',
      rating: 5,
      review: 'Solar power for our common areas has reduced maintenance fees for all residents by 15%.',
      avatar: 'J',
      location: 'Residential Building',
      verified: true
    },
    {
      name: 'Silva Family',
      date: '4 months ago',
      rating: 5,
      review: 'With fixed incomes, eliminating our electricity bill has given us financial peace of mind in retirement.',
      avatar: 'S',
      location: 'Retirees, Kandy',
      verified: true
    },
    {
      name: 'Fernando Restaurant',
      date: '2 months ago',
      rating: 5,
      review: 'Our customers appreciate that we use renewable energy, and our operating costs have dropped significantly.',
      avatar: 'F',
      location: 'Food Business, Negombo',
      verified: true
    },
    {
      name: 'Bandara School',
      date: '6 months ago',
      rating: 5,
      review: "We're teaching the next generation about sustainability while saving money that can be redirected to educational resources.",
      avatar: 'B',
      location: 'Educational Institution',
      verified: true
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === reviews.length - getVisibleCount() ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - getVisibleCount() : prevIndex - 1
    );
  };

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1200) return 4;
      if (window.innerWidth >= 900) return 3;
      if (window.innerWidth >= 600) return 2;
      return 1;
    }
    return 4;
  };

  const visibleReviews = reviews.slice(currentIndex, currentIndex + getVisibleCount());

  return (
    <section className="google-reviews-section">
      <div className="reviews-header">
        <div className="header-content">
          <div className="google-style-logo">
            <span className="g-blue">G</span>
            <span className="o-red">o</span>
            <span className="o-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="l-green">l</span>
            <span className="o-red">e</span>
            <span className="reviews-text"> Reviews</span>
          </div>
          <h2>Customer Experiences</h2>
          <p>Rated 4.9/5 based on 287 reviews</p>
        </div>
        <div className="overall-rating">
          <div className="rating-number">4.9</div>
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="star">★</span>
            ))}
          </div>
          <div className="rating-count">287 reviews</div>
        </div>
      </div>

      <div className="reviews-container">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous reviews">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
          </svg>
        </button>

        <div className="reviews-grid">
          {visibleReviews.map((review, index) => (
            <div key={index} className="google-review-card">
              <div className="reviewer-header">
                <div className="reviewer-info">
                  <div className="avatar">{review.avatar}</div>
                  <div className="reviewer-details">
                    <div className="reviewer-name">{review.name}</div>
                    <div className="review-date">{review.date}</div>
                  </div>
                </div>
                <div className="google-logo-mini">
                  <span className="g-mini">G</span>
                </div>
              </div>
              
              <div className="rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                ))}
              </div>
              
              <div className="review-text">
                <p>{review.review}</p>
              </div>
              
              <div className="review-meta">
                <div className="reviewer-location">{review.location}</div>
                {review.verified && (
                  <div className="verified-purchase">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                    Verified Purchase
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn next" onClick={nextSlide} aria-label="Next reviews">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
          </svg>
        </button>
      </div>

      <div className="reviews-dots">
        {Array.from({ length: reviews.length - getVisibleCount() + 1 }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to review set ${index + 1}`}
          />
        ))}
      </div>

      {/* <div className="action-buttons">
        <button className="write-review-btn">Write a Review</button>
        <button className="see-all-btn">See All Reviews</button>
      </div> */}
    </section>
  );
};

export default GoogleStyleReviews;