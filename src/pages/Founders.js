import React from "react";

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "auto",
};

const grid2Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "20px",
  textAlign: "center",
  background: "#fff",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
};

function Founders() {
  return (
    <section style={sectionStyle}>
      <h2>Founders</h2>
      <div style={grid2Style}>
        <div style={cardStyle}>
          <img src="https://via.placeholder.com/300?text=Ronak+Photo" alt="Ronak" style={imageStyle} />
          <h3>Ronak Hiwale</h3>
          <p><strong>Founder • Rising Senior</strong></p>
          <p>Chess National Master. Passionate about STEM education and leadership.</p>
        </div>

        <div style={cardStyle}>
          <img src="https://via.placeholder.com/300?text=Riona+Photo" alt="Riona" style={imageStyle} />
          <h3>Riona Hiwale</h3>
          <p><strong>Co-Founder • 7th Grader</strong></p>
          <p>Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.</p>
        </div>
      </div>
    </section>
  );
}

export default Founders;
