import React from "react";
import td6 from "../images/tour/td6.JPEG";
import td7 from "../images/tour/td7.JPEG";
import tour5 from "../images/tour/tour5.JPEG";
const tourImages = [td6, td7, tour5]; 
function Tournaments() {
  return (
     <div style={pageStyle}>
    <section style={heroStyle}>
      <h1 style={heroTitle}>Friday USCF-Rated Chess Tournaments</h1>
       <p style={heroSubtitle}>Join our weekly USCF rated tournaments open to players of all ages and skill levels. </p>
       <p><strong>Tournament Formats:</strong> G25 d5, G30/G40 d5, and Blitz </p>
      <p><strong>Location:</strong> 4400 Bellaire Blvd, Bellaire, TX 77401.</p>
      <p><strong>Time:</strong> Fridays, 6:30 PM</p>
      <a href="/signup">
        <button style={buttonStyle}>Register</button>
      </a> 
        <h2 style={heroTitle}><a href="/contact">Contact US for more details</a></h2>
        
<h1 style={heroTitle}>Friday Checkmate Challenge Tournament Photo Gallery</h1>

{/* Tour Images Section */}
      <section style={{ padding: "20px 20px", maxWidth: "1500px", margin: "auto" }}>
         <a href="/gallery">
          <div style={gridStyle}>
          {tourImages.map((img, index) => (
            <img key={index} src={img} alt={`Tour ${index + 1}`} style={imageStyle} />
          ))}
        </div>
        </a>
      </section>
{/* View more link */}
<div style={{ textAlign: "center", marginTop: "16px" }}>
  <a href="/gallery" style={viewMoreStyle}>
    <h1 style={heroTitle}>View more →</h1>
  </a>
</div>
<h2 style={heroTitle}>Follow US AT  <a href="https://www.instagram.com/fridaycheckmatechallenge">Instagram</a> | <a href="https://www.facebook.com/profile.php?id=61581438467344">Facebook</a></h2>
    </section>
    <section style={sectionWrapperStyle}></section>
    
    </div>

  );
}
const viewMoreStyle = {
  fontSize: "1.1rem",
  fontWeight: "600",
  color: "#155f4b",
  textDecoration: "none",
  cursor: "pointer",
};


const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
  gap: "20px",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
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
const buttonStyle = {
  marginTop: "20px",
  padding: "12px 24px",
  fontSize: "1rem",
  background: "#2ecc71",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};
const sectionWrapperStyle = {
  width: "100%",
  background: "#eafaf1",
};
export default Tournaments;
