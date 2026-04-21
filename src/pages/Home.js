import React, { useState } from "react";

import logo from "../images/logo.png";
import ronakImg from "../images/ronak/ronaksjs.jpeg";
import ronakImg20 from "../images/ronak/ronak20.JPEG";
import ronakImg18 from "../images/ronak/ronak18.jpeg";
import ronakImg6 from "../images/ronak/ronak6.jpeg";
import ronakImg2 from "../images/ronak/ronak2.jpeg";
import ronakImg11 from "../images/ronak/ronak11.jpeg";

import ronakcash from "../images/ronak/roncash.jpeg";
import ronakcash1 from "../images/ronak/roncash1.jpeg";
import rontropy from "../images/ronak/rontropy.jpeg";
import rontropy1 from "../images/ronak/rontropy1.JPEG";
import rontropy2 from "../images/ronak/rontropy2.jpeg";
import rontropy3 from "../images/ronak/rontropy3.jpeg";
import rontropy4 from "../images/ronak/rontropy4.jpeg";
import rontropy5 from "../images/ronak/rontropy5.jpeg";

// Riona main images
import rionaImg from "../images/riona/rionaimg.JPEG";
import riona2 from "../images/riona/riona2.JPEG";
import riona8 from "../images/riona/riona8.JPEG";
import riona9 from "../images/riona/riona9.JPEG";
import riona12 from "../images/riona/riona12.JPEG";
import riona16 from "../images/riona/riona16.JPEG";

// Riona trophies

import rionatrophy2 from "../images/riona/rionatrophy2.JPEG";

// Chess lessons
import riochesslesson1 from "../images/riona/riochesslesson1.png";
import riochesslesson2 from "../images/riona/riochesslesson2.png";
import riochesslesson3 from "../images/riona/riochesslesson3.png";
import riochesslesson4 from "../images/riona/riochesslesson4.png";

//robs
import rrob1 from "../images/riona/rrob1.JPEG";
import rrob2 from "../images/riona/rrob2.JPEG";
import rrob3 from "../images/riona/rrob3.JPEG";
import rrob4 from "../images/riona/rrob4.JPEG";
function Home() {
  const [activeFounder, setActiveFounder] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const founders = [
    {
      name: "Ronak Hiwale",
      title: "Founder, CEO, President & Head Coach",
      shortBio:
        "Chess National Master. Passionate about STEM education and leadership.",
      longBio:
        "Ronak Hiwale is a Chess National Master with multiple state and national-level titles. As the Founder & Head Coach of RRRK Solutions, he is deeply committed to empowering young minds through Chess and STEM education. He believes in hands-on learning, discipline, and personalized mentorship.",
      profileImage: ronakImg,
      gallery: [ronakImg,ronakImg18,
  ronakImg6,
  ronakImg2,
  ronakImg11,
  ronakcash,
  ronakcash1,
  rontropy,
  rontropy1,
  rontropy2,
  rontropy3,
  rontropy4,
  rontropy5],
    },
    {
      name: "Riona Hiwale",
      title: "Co-Founder, CTO & Assistant Coach",
      shortBio:
        "Many years Ranked under top 100 chess player in the U.S in the girls age category. Young innovator in robotics and coding.",
      longBio:
        "Coach Riona has been nationally ranked many times among the Top 100 chess players in the United States in the girls’ age category. She brings strong competitive experience and smart strategies to her coaching, inspiring students to think clearly and play with confidence. She is especially great with beginner kids, making learning chess fun and easy to understand.Beyond chess, Coach Riona is a young innovator in robotics and coding, and she enjoys solving problems and thinking logically. She often brings these skills into her teaching to help students learn in creative ways.Coach Riona is also a classical Odissi dancer, singer, and violinist, with a deep love for music and the arts. She enjoys volleyball and swimming and believes in the importance of balance, discipline, and creativity for personal growth. Coach Riona is dedicated to nurturing young minds, building confidence, focus, and excellence—both on and off the chessboard.",
      profileImage: rionaImg,
      gallery: [rionaImg, riona16,
  riona2,
  riona8,
  riona9,
  riona12,
  rionatrophy2,
  riochesslesson1,
  riochesslesson2,
  riochesslesson3,
  riochesslesson4,
  rrob1,rrob2,rrob3,rrob4],
      imagePosition: "right",
    },
  ];

  return (
    <div style={pageStyle}>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <img src={logo} alt="RRRK Solutions Logo" style={heroLogoStyle} />
        <h1 style={heroTitle}>RRRK Solutions</h1>
        <p style={heroSubtitle}>
          Empowering Young Minds Through Chess, Math, Coding, Science Fair & Robotics
        </p>
        <p style={heroLocation}>Bellaire / Houston, Texas</p>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess,
          Mathematics, Coding, Science Fair and Robotics through both private tutoring, mentoring and
          community outreach initiatives. Our thoughtfully designed classes
          build strong foundations, sharpen problem-solving skills, and inspire
          curiosity through hands-on learning, with a commitment to serving
          underserved communities.
        </p>
      </section>


      {/* FOUNDERS SECTION */}
      <section style={sectionWrapperStyle}>
        <div style={sectionStyle}>
        <h2 style={sectionTitle}>Meet Our Coach & Founders</h2>

        <div style={grid2Style}>
          {founders.map((founder, index) => (
            <div
              key={index}
              style={cardStyle}
              onClick={() => setActiveFounder(founder)}
            >
              <div style={nameRowStyle}>
                <img
                  src={founder.profileImage}
                  alt={founder.name}
                  style={smallFounderImageStyle}
                />
                <div>
                  <h3>{founder.name}</h3>
                  <p style={founderTitleStyle}>{founder.title}</p>
                </div>
              </div>

              <p>{founder.shortBio}</p>
              <p style={readMoreStyle}>Click to read more →</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* MODAL BIO */}
      {activeFounder && (
        <div style={modalOverlayStyle} onClick={() => setActiveFounder(null)}>
          <div
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={modalHeaderStyle}>
              <img
                src={activeFounder.profileImage}
                alt={activeFounder.name}
                style={modalProfileImageStyle}
              />
              <div>
                <h2>{activeFounder.name}</h2>
                <p style={founderTitleStyle}>{activeFounder.title}</p>
              </div>
            </div>

            <p style={modalBioStyle}>{activeFounder.longBio}</p>

            <button
              style={galleryButtonStyle}
              onClick={() => setGalleryOpen(true)}
            >
              View Photo Gallery
            </button>

            <button
              style={closeButtonStyle}
              onClick={() => setActiveFounder(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* GALLERY POPUP */}
      {galleryOpen && activeFounder && (
        <div
          style={modalOverlayStyle}
          onClick={() => setGalleryOpen(false)}
        >
          <div
            style={galleryContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <h3>{activeFounder.name} – Photo Gallery</h3>

            <div style={galleryGridStyle}>
              {activeFounder.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Founder Gallery"
                  style={galleryImageStyle}
                />
              ))}
            </div>

            <button
              style={closeButtonStyle}
              onClick={() => setGalleryOpen(false)}
            >
              Close Gallery
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Styles ---------- */

const pageStyle = {
  fontFamily: "'Segoe UI', Arial, sans-serif",
  lineHeight: "1.6",
  color: "#222",
};
const logoStyle = {
  height: "50px",
  width: "auto"
};

const heroLogoStyle = {
  height: "120px",
  marginBottom: "20px"
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
const sectionStyle = {
  padding: "90px 20px",
  maxWidth: "1200px",
  margin: "auto",
};

const sectionTitle = {
  textAlign: "center",
  marginBottom: "50px",
  fontSize: "2rem",
  color: "#155f4b",
};

const missionTextStyle = {
  fontSize: "1.15rem",
  textAlign: "center",
  maxWidth: "850px",
  margin: "auto",
  color: "#333",
};

const grid2Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "16px",
  padding: "30px",
  background: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  cursor: "pointer",
};

const nameRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: "15px",
  marginBottom: "15px",
};

const smallFounderImageStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid #dff7ea",
};

const founderTitleStyle = {
  color: "#155f4b",
  fontWeight: "600",
};

const readMoreStyle = {
  marginTop: "15px",
  color: "#2a8c6e",
  fontWeight: "600",
};

/* ---------- Modal Styles ---------- */

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  background: "#fff",
  padding: "40px",
  borderRadius: "18px",
  maxWidth: "750px",
  width: "90%",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const modalHeaderStyle = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

const modalProfileImageStyle = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
};

const modalBioStyle = {
  fontSize: "1.1rem",
  marginTop: "20px",
};

const galleryButtonStyle = {
  marginTop: "20px",
  padding: "10px 20px",
  borderRadius: "8px",
  border: "none",
  background: "#2a8c6e",
  color: "#fff",
  cursor: "pointer",
  marginRight: "10px",
};

const closeButtonStyle = {
  marginTop: "20px",
  padding: "10px 22px",
  borderRadius: "8px",
  border: "none",
  background: "#155f4b",
  color: "#fff",
  cursor: "pointer",
};

/* ---------- Gallery Popup ---------- */

const galleryContentStyle = {
  background: "#fff",
  padding: "30px",
  borderRadius: "18px",
  maxWidth: "850px",
  width: "95%",
};

const galleryGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "15px",
  marginTop: "20px",
};

const galleryImageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "12px",
};

export default Home;