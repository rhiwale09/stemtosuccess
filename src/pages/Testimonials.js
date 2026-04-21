import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Parent Name",
      program: "Chess Training",
      quote: "Ronak Academy helped my child grow in confidence and skills!",
    },
    {
      name: "Student Name",
      program: "Coding",
      quote: "I love the coding classes. So fun and easy to follow.",
    },
    {
      name: "Parent Name",
      program: "Robotics",
      quote: "Great instructors and amazing hands-on learning.",
    },
  ];

  return (
    <div style={pageStyle}>
    <section style={heroStyle}>
      <h1 style={heroTitle}>Testimonials</h1>
        <div style={gridStyle}>
        {testimonials.map((t, index) => (
          <div key={index} style={cardStyle}>
            <h4>{t.name}</h4>
            <p><strong>{t.program}</strong></p>
            <p>"{t.quote}"</p>
          </div>
        ))}
      </div>
      </section>
    </div>
  );
}

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  background: "#fff",
};
const pageStyle = {
  fontFamily: "'Segoe UI', Arial, sans-serif",
  lineHeight: "1.6",
  color: "#222",
};

const heroStyle = {
  background: "linear-gradient(135deg, #dff7ea, #c8f0de)",
  textAlign: "center",
  padding: "90px 20px",
};

const heroTitle = {
  fontSize: "3rem",
  marginBottom: "10px",
  color: "#155f4b",
};

const heroSubtitle = {
  fontSize: "1.4rem",
  marginTop: "10px",
};

const heroLocation = {
  fontSize: "1.1rem",
  marginTop: "8px",
  color: "#444",
};
const sectionWrapperStyle = {
  width: "100%",
  background: "#eafaf1",
};
export default Testimonials;
