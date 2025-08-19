import React from "react";


// Sample photos array – replace these URLs with your own work photos
const photos = [
  "/images/solar1.jpeg",
  "/images/solar2.jpeg",
  "/images/solar3.jpeg",
  "/images/solar4.jpeg",
  "/images/solar5.jpeg",
  "/images/solar6.jpeg",
];

const Photos = () => {
  return (
    <section id="photos" className="photos-section" style={{ padding: "2rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1e3a8a" }}>
          Our Work Gallery
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#4b5563" }}>
          Take a look at our previous solar panel installations across Sri Lanka.
        </p>
      </div>

      <div
        className="photos-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {photos.map((photo, index) => (
          <div
            key={index}
            className="photo-card"
            style={{
              overflow: "hidden",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onClick={() => window.open(photo, "_blank")}
          >
            <img
              src={photo}
              alt={`Solar Installation ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                transition: "transform 0.3s ease",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
