/*import React from "react";

const heroStyle = {
  background: "#dff7ea",
  textAlign: "center",
  padding: "80px 20px",
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

function Home() {
  return (
    <section style={heroStyle}>
      <h1>RRRK Solutions</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Empowering Young Minds Through Chess, Math, Coding & Robotics
      </p>
      <p>Bellaire / Houston, Texas</p>
      <a href="/signup">
        <button style={buttonStyle}>Join Now</button>
      </a>
    </section>
  );
}

export default Home;*/


import React from "react";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1>RRRK Solutions</h1>
        <p style={{ fontSize: "1.3rem", marginTop: "10px" }}>
          Empowering Young Minds Through Chess, Math, Coding & Robotics
        </p>
        <p style={{ fontSize: "1.1rem", marginTop: "5px" }}>
          Bellaire / Houston, Texas
        </p>
      </section>

      {/* MISSION SECTION */}
      <section style={sectionStyle}>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess, Mathematics, Coding, and Robotics through both private tutoring and community outreach initiatives. Our thoughtfully designed classes build strong foundations, sharpen problem-solving skills, and inspire curiosity through hands-on learning, with a commitment to serving underserved communities.
      </p>
      </section>

      {/* FOUNDERS SECTION */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Meet Our Coach & Founders
        </h2>

        <div style={grid2Style}>
          <div style={cardStyle}>
            <h3>Ronak Hiwale</h3>
            <p><strong>Founder & Head Coach</strong></p>
            <p>
              Chess National Master with many titles state and national grade level. Passionate about STEM education and leadership.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Riona Hiwale</h3>
            <p><strong>Co-Founder</strong></p>
            <p>
              Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ---------- Styles ---------- */

const heroStyle = {
  background: "#dff7ea",
  textAlign: "center",
  padding: "80px 20px",
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1000px",
  margin: "auto",
};

const missionTextStyle = {
  fontSize: "1.15rem",
  textAlign: "center",
  maxWidth: "800px",
  margin: "auto",
  color: "#333",
};

const grid2Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "30px",
  textAlign: "center",
  background: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

export default Home;
/*import React from "react";

const heroStyle = {
  background: "#dff7ea",
  textAlign: "center",
  padding: "80px 20px",
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

function Home() {
  return (
    <section style={heroStyle}>
      <h1>RRRK Solutions</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Empowering Young Minds Through Chess, Math, Coding & Robotics
      </p>
      <p>Bellaire / Houston, Texas</p>
      <a href="/signup">
        <button style={buttonStyle}>Join Now</button>
      </a>
    </section>
  );
}

export default Home;*/
import React from "react";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* HERO */}
      <section style={heroStyle}>
        <h1>Ronak Academy</h1>
        <p style={{ fontSize: "1.2rem" }}>
          Empowering Young Minds Through Chess, Math, Coding & Robotics
        </p>
        <p>Bellaire / Houston, Texas</p>
        <a href="/signup">
          <button style={buttonStyle}>Join Now</button>
        </a>
      </section>

      {/* PROGRAMS */}
      <section style={sectionStyle}>
        <h2>Programs</h2>
        <div style={grid4Style}>
          {[
            { title: "Chess Training", text: "Beginner to advanced chess coaching" },
            { title: "Math Enrichment", text: "Competition math & logical thinking" },
            { title: "Coding", text: "Python, Scratch, Web Development" },
            { title: "Robotics", text: "LEGO, Arduino & hands-on robotics" },
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOUNDERS */}
      <section style={sectionStyle}>
        <h2>Founders</h2>
        <div style={grid2Style}>
          <div style={cardStyle}>
            <h3>Ronak Hiwale</h3>
            <p><strong>Founder • Rising Senior</strong></p>
            <p>Chess National Master. Passionate about STEM education and leadership.</p>
          </div>
          <div style={cardStyle}>
            <h3>Riona Hiwale</h3>
            <p><strong>Co-Founder • 7th Grader</strong></p>
            <p>Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.</p>
          </div>
        </div>
      </section>

      {/* TOURNAMENTS */}
      <section style={sectionStyle}>
        <h2>Friday Checkmate Challenge</h2>
        <p>Weekly chess tournaments for all ages and skill levels.</p>
        <p><strong>Location:</strong> Betsy at Evelyn Park</p>
        <p><strong>Address:</strong> 4400 Bellaire Blvd, Bellaire, TX 77401</p>
        <p><strong>Time:</strong> Fridays, 6:30 PM</p>
        <a href="/tournaments">
          <button style={buttonStyle}>View Tournaments</button>
        </a>
      </section>

      {/* CTA */}
      <section style={ctaStyle}>
        <h2>Ready to Join?</h2>
        <p>Sign up for classes, tournaments, or clubs today.</p>
        <a href="/signup">
          <button style={buttonStyle}>Sign Up</button>
        </a>
      </section>

    </div>
  );
}

/* Styles */

const heroStyle = {
  background: "#dff7ea",
  textAlign: "center",
  padding: "80px 20px",
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1200px",
  margin: "auto",
};

const ctaStyle = {
  background: "#eafaf1",
  textAlign: "center",
  padding: "60px 20px",
};

const grid4Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
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

export default Home;

import React from "react";

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>

      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1>RRRK Solutions</h1>
        <p style={{ fontSize: "1.3rem", marginTop: "10px" }}>
          Empowering Young Minds Through Chess, Math, Coding & Robotics
        </p>
        <p style={{ fontSize: "1.1rem", marginTop: "5px" }}>
          Bellaire / Houston, Texas
        </p>
      </section>

      {/* MISSION SECTION */}
      <section style={sectionStyle}>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess, Mathematics, Science, and Coding. Our thoughtfully designed classes build strong foundations, sharpen problem-solving skills, and inspire curiosity through hands-on learning.
        </p>
      </section>

      {/* FOUNDERS SECTION */}
      <section style={sectionStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          Meet Our Coach & Founders
        </h2>

        <div style={grid2Style}>
          <div style={cardStyle}>
            <h3>Ronak Hiwale</h3>
            <p><strong>Founder & Head Coach</strong></p>
            <p>
              Chess National Master. Passionate about STEM education and leadership.
            </p>
          </div>

          <div style={cardStyle}>
            <h3>Riona Hiwale</h3>
            <p><strong>Co-Founder</strong></p>
            <p>
              Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

/* ---------- Styles ---------- */

const heroStyle = {
  background: "#dff7ea",
  textAlign: "center",
  padding: "80px 20px",
};

const sectionStyle = {
  padding: "60px 20px",
  maxWidth: "1000px",
  margin: "auto",
};

const missionTextStyle = {
  fontSize: "1.15rem",
  textAlign: "center",
  maxWidth: "800px",
  margin: "auto",
  color: "#333",
};

const grid2Style = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "30px",
  textAlign: "center",
  background: "#fff",
  boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
};

export default Home;





import React, { useState } from "react";

function Home() {
  const [activeFounder, setActiveFounder] = useState(null);

  const founders = [
    {
      name: "Ronak Hiwale",
      title: "Founder & Head Coach",
      shortBio:
        "Chess National Master. Passionate about STEM education and leadership.",
      longBio:
        "Ronak Hiwale is a Chess National Master with multiple state and national-level titles. As the Founder & Head Coach of RRRK Solutions, he is deeply committed to empowering young minds through Chess and STEM education. Ronak believes in hands-on learning, discipline, and personalized mentorship. He has trained students of all ages, guiding them to competitive success and academic excellence.",
      image: "/images/ronak.jpg", // replace with your image
    },
    {
      name: "Riona Hiwale",
      title: "Co-Founder",
      shortBio:
        "Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.",
      longBio:
        "Riona Hiwale is a nationally ranked chess player and Co-Founder of RRRK Solutions. Despite being a 7th grader, she has already achieved a top-100 ranking in the U.S. and actively contributes to robotics and coding education. Riona inspires young learners by demonstrating that age is no barrier to leadership, innovation, and excellence.",
      image: "/images/riona.jpg", // replace with your image
    },
  ];

  return (
    <div style={pageStyle}>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>RRRK Solutions</h1>
        <p style={heroSubtitle}>
          Empowering Young Minds Through Chess, Math, Coding & Robotics
        </p>
        <p style={heroLocation}>Bellaire / Houston, Texas</p>
      </section>

      {/* MISSION SECTION */}
      <section style={sectionStyle}>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess,
          Mathematics, Coding, and Robotics through both private tutoring and
          community outreach initiatives. Our thoughtfully designed classes
          build strong foundations, sharpen problem-solving skills, and inspire
          curiosity through hands-on learning, with a commitment to serving
          underserved communities.
        </p>
      </section>

      {/* FOUNDERS SECTION */}
      <section style={sectionStyle}>
        <h2 style={sectionTitle}>Meet Our Coach & Founders</h2>

        <div style={grid2Style}>
          {founders.map((founder, index) => (
            <div
              key={index}
              style={cardStyle}
              onClick={() => setActiveFounder(founder)}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={founderImageStyle}
              />
              <h3>{founder.name}</h3>
              <p style={founderTitleStyle}>{founder.title}</p>
              <p>{founder.shortBio}</p>
              <p style={readMoreStyle}>Click to read more →</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL BIO */}
      {activeFounder && (
        <div style={modalOverlayStyle} onClick={() => setActiveFounder(null)}>
          <div
            style={modalContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeFounder.image}
              alt={activeFounder.name}
              style={modalImageStyle}
            />
            <h2>{activeFounder.name}</h2>
            <p style={founderTitleStyle}>{activeFounder.title}</p>
            <p style={modalBioStyle}>{activeFounder.longBio}</p>
            <button
              style={closeButtonStyle}
              onClick={() => setActiveFounder(null)}
            >
              Close
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

const sectionStyle = {
  padding: "70px 20px",
  maxWidth: "1100px",
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
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "30px",
};

const cardStyle = {
  border: "1px solid #e0e0e0",
  borderRadius: "16px",
  padding: "30px",
  textAlign: "center",
  background: "#fff",
  boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const founderImageStyle = {
  width: "130px",
  height: "130px",
  objectFit: "cover",
  borderRadius: "50%",
  marginBottom: "15px",
  border: "4px solid #dff7ea",
};

const founderTitleStyle = {
  color: "#155f4b",
  fontWeight: "600",
  marginBottom: "10px",
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
  maxWidth: "700px",
  width: "90%",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
};

const modalImageStyle = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "20px",
};

const modalBioStyle = {
  fontSize: "1.1rem",
  marginTop: "20px",
  color: "#333",
};

const closeButtonStyle = {
  marginTop: "25px",
  padding: "10px 22px",
  borderRadius: "8px",
  border: "none",
  background: "#155f4b",
  color: "#fff",
  fontSize: "1rem",
  cursor: "pointer",
};

export default Home;



import React, { useState } from "react";

function Home() {
  const [activeFounder, setActiveFounder] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  const founders = [
    {
      name: "Ronak Hiwale",
      title: "Founder & Head Coach",
      shortBio:
        "Chess National Master. Passionate about STEM education and leadership.",
      longBio:
        "Ronak Hiwale is a Chess National Master with multiple state and national-level titles. As the Founder & Head Coach of RRRK Solutions, he is deeply committed to empowering young minds through Chess and STEM education. He believes in hands-on learning, discipline, and personalized mentorship.",
      profileImage: "/images/ronak.jpg",
      gallery: [
        "/images/ronak1.jpg",
        "/images/ronak2.jpg",
        "/images/ronak3.jpg",
      ],
    },
    {
      name: "Riona Hiwale",
      title: "Co-Founder",
      shortBio:
        "Ranked under top 100 in the U.S. in chess. Young innovator in robotics and coding.",
      longBio:
        "Riona Hiwale is a nationally ranked chess player and Co-Founder of RRRK Solutions. Despite being a 7th grader, she actively contributes to robotics and coding education and inspires young learners.",
      profileImage: "/images/riona.jpg",
      gallery: [
        "/images/riona1.jpg",
        "/images/riona2.jpg",
        "/images/riona3.jpg",
      ],
    },
  ];

  return (
    <div style={pageStyle}>
      {/* HERO SECTION */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>RRRK Solutions</h1>
        <p style={heroSubtitle}>
          Empowering Young Minds Through Chess, Math, Coding & Robotics
        </p>
        <p style={heroLocation}>Bellaire / Houston, Texas</p>
      </section>

      {/* MISSION SECTION */}
      <section style={sectionStyle}>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess,
          Mathematics, Coding, and Robotics through both private tutoring and
          community outreach initiatives. Our thoughtfully designed classes
          build strong foundations, sharpen problem-solving skills, and inspire
          curiosity through hands-on learning, with a commitment to serving
          underserved communities.
        </p>
      </section>

      {/* FOUNDERS SECTION */}
      <section style={sectionStyle}>
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

const sectionStyle = {
  padding: "70px 20px",
  maxWidth: "1100px",
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

      {/* MISSION SECTION */}
     /* <section style={sectionStyle}>
        <p style={missionTextStyle}>
          RRRK Solutions provides high-quality educational programs in Chess,
          Mathematics, Coding, Science Fair and Robotics through both private tutoring and
          community outreach initiatives. Our thoughtfully designed classes
          build strong foundations, sharpen problem-solving skills, and inspire
          curiosity through hands-on learning, with a commitment to serving
          underserved communities.
        </p>
      </section>*/