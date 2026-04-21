import React from "react";

function Payments() {
  return (
    <div style={pageStyle}>
    <section style={heroStyle}>
      <h1 style={heroTitle}>Pay for Classes & Tournaments</h1>
       <p style={heroSubtitle}>Stripe payment placeholder. </p>
      <div style={paymentBoxStyle}>[stripe_payment]</div>
      </section>
    </div>
  );
}

const paymentBoxStyle = {
  border: "2px dashed #aaa",
  padding: "40px",
  textAlign: "center",
  marginTop: "20px",
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
export default Payments;
