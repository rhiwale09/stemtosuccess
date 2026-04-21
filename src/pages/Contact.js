import React from "react";

function Contact() {
  return (
      <div style={pageStyle}>
    <section style={heroStyle}>
      <h1 style={heroTitle}>Contact</h1>
      <p><strong>City:</strong> Bellaire / Houston, Texas</p>
      <p><strong>Email:</strong>rrrksolutions@gmail.com</p>
      <p><strong>Phone:</strong> (408) 250-0288</p>
      <p>
        <strong>Social:</strong>{" "}
        <a href="https://www.instagram.com/fridaycheckmatechallenge">Instagram</a> | <a href="https://www.facebook.com/profile.php?id=61581438467344">Facebook</a>
      </p>
      </section>
    </div>
  );
}
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
export default Contact;
