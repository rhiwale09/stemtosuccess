import React from "react";

// TD images
import td1 from "../images/tour/td1.JPEG";
import td2 from "../images/tour/td2.JPEG";
import td3 from "../images/tour/td3.JPEG";
import td4 from "../images/tour/td4.JPEG";
import td5 from "../images/tour/td5.JPEG";
import td6 from "../images/tour/td6.JPEG";
import td7 from "../images/tour/td7.JPEG";
import td8 from "../images/tour/td8.JPEG";
import td9 from "../images/tour/td9.JPEG";

// Tour images
import tour1 from "../images/tour/tour1.JPEG";
import tour2 from "../images/tour/tour2.JPEG";
import tour3 from "../images/tour/tour3.JPEG";
import tour4 from "../images/tour/tour4.JPEG";
import tour5 from "../images/tour/tour5.JPEG";
import tour6 from "../images/tour/tour6.JPEG";
import tour7 from "../images/tour/tour7.JPEG";
import tour8 from "../images/tour/tour8.JPEG";
import tour9 from "../images/tour/tour9.JPEG";
import tour10 from "../images/tour/tour10.JPEG";
import tour11 from "../images/tour/tour11.JPEG";
import tour12 from "../images/tour/tour12.JPEG";
import tour13 from "../images/tour/tour13.JPEG";
import tour14 from "../images/tour/tour14.JPEG";
import tour15 from "../images/tour/tour15.JPEG";
import tour16 from "../images/tour/tour16.JPEG";
import tour17 from "../images/tour/tour17.JPEG";

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
// Combine images into arrays
const tdImages = [td1, td2, td3, td4, td5, td6, td7];
const tourImages = [td1, td2, td3,  td6, td7, tour5, tour6,tour11,tour13,tour1, tour2, tour3, td4, tour4, tour7, td5,tour8,tour9,tour10,tour12,tour14,tour15,tour16,tour17 ];
const ronakImages=[
   ronakcash, rontropy3, rontropy1,
    rontropy,rontropy2,rontropy4,
      ronakImg6,rontropy5,ronakcash1,
  ronakImg18, ronakImg2,ronakImg11,


  ];
  const rionaImages=[rionaImg, rionatrophy2,riona16,
     riochesslesson2,
  riochesslesson3,
  riochesslesson4,
  riona2,
  riona8,
  riona9,
  riona12,
  riochesslesson1,
 ];
function Gallery() {
  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
        <h1 style={heroTitle}>FridayChemateChallenge Tournament Photo Gallery</h1>
      {/* Tour Images Section */}
      <section style={{ padding: "20px 20px", maxWidth: "1500px", margin: "auto" }}>
          <div style={gridStyle}>
          {tourImages.map((img, index) => (
            <img key={index} src={img} alt={`Tour ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </section>

      {/* TD Images Section */}
      <section style={{ padding: "40px 20px", maxWidth: "1500px", margin: "auto" }}>
         <h1 style={heroTitle}>Tournament Director, HeadCoach, Ronak Hiwale Photo Gallery</h1>
         <img src={ronakImg} alt="Global Guru Online chess instructor" style={heroLogoStyle}/>
        <div style={gridStyle}>
          {ronakImages.map((img, index) => (
            <img key={index} src={img} alt={`TD ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </section>
       {/* TD Images Section */}
      <section style={{ padding: "40px 20px", maxWidth: "1500px", margin: "auto" }}>
         <h1 style={heroTitle}>AssistantCoach, Riona Hiwale Photo Gallery</h1>
        <div style={gridStyle}>
          {rionaImages.map((img, index) => (
            <img key={index} src={img} alt={`TD ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </section>
       </section>
    </div>
  );
}
const heroLogoStyle = {
  height: "370px",
  marginBottom: "20px"
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
export default Gallery;
