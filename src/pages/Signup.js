import React from "react";

function Signup() {
  return (
     <div style={pageStyle}>
    <section style={heroStyle}>
      <h1 style={heroTitle}>Sign Up</h1>
       
      <iframe
        title="Google Form"
        src="https://forms.gle/ft1L8CbCuPG1XpCB6"
        width="100%"
        height="600"
        frameBorder="0"
      >
        Loading…
      </iframe>
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
export default Signup;
