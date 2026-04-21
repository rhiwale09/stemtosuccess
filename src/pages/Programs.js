import React, { useRef } from "react";


// ✅ Image imports (replace paths with your real images)
import chessImg from "../images/assets/chess.png";
import mathImg from "../images/assets/math.png";
import scienceImg from "../images/assets/science.png";
import roboticsImg from "../images/assets/robotics.png";

function Programs() {
  const formRef = useRef(null);

const scrollToForm = () => {
  formRef.current?.scrollIntoView({ behavior: "smooth" });
};

  const programs = [
    {
      title: "Chess Tutoring",
      text: `Grades K–12 | Beginner to Competitive

• Beginner Fundamentals
• Strategy & Tactics
• Endgame Mastery
• Tournament Preparation
• 1-on-1 & Small Group Coaching

Build confidence, focus, and strategic thinking through structured chess training.`,
      img: chessImg,
    },
    {
      title: "Math Tutoring",
      text: `Grades K–12 | Academic & Competitive

Academic Math:
• General Math
• Geometry
• Pre-Algebra
• Algebra I & II
• Pre-Calculus
• Calculus

Competitive Math:
• Number Sense
• AMC 8
• MathCounts
• Math League
• Singapore Math
• Math Olympiad

Emphasis on logical thinking, problem-solving, and deep conceptual understanding.`,
      img: mathImg,
    },
    {
      title: "Science Fair & Research Mentoring",
      text: `Grades 6–12

• Science Fair Project Guidance
• Research Question Development
• Experimental Design
• Data Analysis
• Presentation & Board Design
• Competition Preparation

Step-by-step mentoring that makes research clear, ethical, and achievable.`,
      img: scienceImg,
    },
    {
      title: "Robotics Programs",
      text: `Hands-on STEM Learning

Programs:
• FLL (FIRST LEGO League)
• FTC (FIRST Tech Challenge)
• FRC (FIRST Robotics Competition)

Skills Covered:
• Programming
• Mechanical Design
• Engineering Notebook
• Team Strategy & Competition Readiness

Learn engineering, teamwork, and innovation through real-world challenges.`,
      img: roboticsImg,
    },
  ];
const signupLinks = {
  "Chess Tutoring":
    "https://forms.gle/hmNWHkt7dEtmhXD69",
  "Math Tutoring":
    "https://forms.gle/hmNWHkt7dEtmhXD69",
  "Science Fair & Research Mentoring":
    "https://forms.gle/hmNWHkt7dEtmhXD69",
  "Robotics Programs":
    "https://forms.gle/hmNWHkt7dEtmhXD69",
};


  return (
    <div style={pageStyle}>
      <section style={heroStyle}>
        <h1 style={heroTitle}>Our Programs</h1>
      <button style={signupButton} onClick={scrollToForm}>
  Enroll / Request a Free Trial
</button>

        <div style={grid4Style}>
          {programs.map((item, index) => (
            <div key={index} style={cardStyle}>
              
             <div style={logoContainer}>
  <img src={item.img} alt={item.title} style={logoStyle} />
</div>

         
              <h3 style={cardTitleStyle}>{item.title}</h3>
              <p style={cardTextStyle}>{item.text}</p>
              {/*<a
  href={signupLinks[item.title]}
  target="_blank"
  rel="noopener noreferrer"
  style={signupButton}
>
  Enroll / Sign Up
</a>*/}



            </div>
          ))}
        </div>
        {/*<section style={formSectionStyle}>
  <h2 style={formTitleStyle}>Enroll or Request a Free Trial</h2>*/}
  <section ref={formRef} style={heroStyle}>
        <h1 style={heroTitle}>Enroll or Request a Free Trial</h1>

  <div style={formWrapperStyle}>
    <iframe
      src="https://forms.gle/hmNWHkt7dEtmhXD69"
      width="100%"
      height="950"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Program Enrollment Form"
    >
      Loading…
    </iframe>
  </div>
</section>

      </section>
      
    </div>
  );
}

/* ---------- Styles ---------- */
const formSectionStyle = {
  background: "#ffffff",
  padding: "80px 20px",
  textAlign: "center",
};

const formTitleStyle = {
  fontSize: "2.4rem",
  color: "#155f4b",
  marginBottom: "30px",
};

const formWrapperStyle = {
  maxWidth: "900px",
  margin: "0 auto",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
};

const signupButton = {
  marginTop: "auto",
  padding: "12px 20px",
  backgroundColor: "#155f4b",
  color: "#fff",
  borderRadius: "10px",
  textDecoration: "none",
  fontWeight: "600",
  transition: "background 0.3s",
};

const logoContainer = {
  width: "100%",
  height: "120px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "20px",
};

const logoStyle = {
  maxWidth: "120px",
  maxHeight: "120px",
  objectFit: "contain",
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
  marginTop: "px",
  marginBottom: "10px",
  color: "#155f4b",
};

const grid4Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "30px",
  padding: "0 20px",
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "16px",
  padding: "30px",
  background: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
  marginBottom: "20px",
};

const cardTitleStyle = {
  fontSize: "1.5rem",
  color: "#155f4b",
  marginBottom: "15px",
  textAlign: "center",
};

const cardTextStyle = {
  fontSize: "1rem",
  color: "#333",
  textAlign: "left",
  whiteSpace: "pre-line",
};

export default Programs;
