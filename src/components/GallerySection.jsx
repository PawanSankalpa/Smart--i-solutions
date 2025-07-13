import React from "react";
import "../styles/GallerySection.css";

const GallerySection = () => {
  const images = [
    {
      src: "https://assets.roar.media/Life/2017/09/Cover-Image.jpg?w=679",
      alt: "Residential rooftop installation",
      caption: "Residential Rooftop System"
    },
    {
      src: "https://adaderanaenglish.s3.amazonaws.com/1709286219-Semi-transparent-Solar-photovoltaic-powered-agrivoltaic-pilot-project-l.jpg",
      alt: "Commercial solar farm",
      caption: "Commercial Solar Farm"
    },
    {
      src: "https://cdn1-www.bureauveritas.lk/sites/g/files/zypfnx731/files/2023-04/Storage_960-px.jpg",
      alt: "Energy storage solutions",
      caption: "Energy Storage Solutions"
    },
    {
      src: "https://t4.ftcdn.net/jpg/09/68/30/67/360_F_968306730_DSfNWs5qYOhHPj58Ra8UFaETHO0fsukt.jpg",
      alt: "Solar carport installation",
      caption: "Solar Carport System"
    },
    {
      src: "https://ontario-solar-installers.ca/wp-content/uploads/2017/05/Solar-tracker.jpg",
      alt: "Ground mount with trackers",
      caption: "Ground Mount with Trackers"
    },
    {
      src: "https://au.solaxpower.com/uploads/image/20230912/17/sem.webp",
      alt: "Monitoring system",
      caption: "Real-time Monitoring"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-header">
        <h2>Our Solar Installations</h2>
        <p>Beautiful, efficient solar solutions for every type of property</p>
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
            <div className="gallery-caption">
              <h3>{image.caption}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection; /* GallerySection.css */
