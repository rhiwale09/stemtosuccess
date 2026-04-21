import React from "react";

// TD images
import td1 from "../images/tour/td1.JPEG";
import td2 from "../images/tour/td2.JPEG";
import td3 from "../images/tour/td3.JPEG";
import td4 from "../images/tour/td4.JPEG";
import td5 from "../images/tour/td5.JPEG";
import td6 from "../images/tour/td6.JPEG";
import td7 from "../images/tour/td7.JPEG";


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

// TD images
import stemtosucess from "../images/stemtosuccess/stemtosucess.JPEG";
import stemtosucess2 from "../images/stemtosuccess/stemtosucess2.JPEG";
import stemtosucess3 from "../images/stemtosuccess/stemtosucess3.JPEG";
import stemtosucess4 from "../images/stemtosuccess/stemtosucess4.JPEG";
import stemtosucess5 from "../images/stemtosuccess/stemtosucess5.JPEG";
import stemtosucess6 from "../images/stemtosuccess/stemtosucess6.JPEG";
import stemtosucess7 from "../images/stemtosuccess/stemtosucess7.JPEG";
import stemtosucess8 from "../images/stemtosuccess/stemtosucess8.JPEG";
import stemtosucess9 from "../images/stemtosuccess/stemtosucess9.JPEG";
import stemtosucess10 from "../images/stemtosuccess/stemtosucess10.JPEG";
import stemtosucess11 from "../images/stemtosuccess/stemtosucess11.JPEG";

// Tour images



import stemtosucess4_12 from "../images/stemtosuccess/stemtosucess12.JPEG";
import stemtosucess4_13 from "../images/stemtosuccess/stemtosucess13.JPEG";
import stemtosucess4_14 from "../images/stemtosuccess/stemtosucess14.JPEG";
import stemtosucess4_15 from "../images/stemtosuccess/stemtosucess15.JPEG";
import stemtosucess4_16 from "../images/stemtosuccess/stemtosucess16.JPEG";
import stemtosucess4_17 from "../images/stemtosuccess/stemtosucess17.JPEG";
import stemtosucess4_18 from "../images/stemtosuccess/stemtosucess18.JPEG";
import stemtosucess4_19 from "../images/stemtosuccess/stemtosucess19.JPEG";
import stemtosucess4_20 from "../images/stemtosuccess/stemtosucess20.JPEG";
import stemtosucess4_21 from "../images/stemtosuccess/stemtosucess21.JPEG";
import stemtosucess4_23 from "../images/stemtosuccess/stemtosucess23.JPEG";
import stemtosucess4_25 from "../images/stemtosuccess/stemtosucess25.JPEG";
import stemtosucess4_26 from "../images/stemtosuccess/stemtosucess26.JPEG";
import stemtosucess4_27 from "../images/stemtosuccess/stemtosucess27.JPEG";
import stemtosucess4_28 from "../images/stemtosuccess/stemtosucess28.JPEG";
import stemtosucess4_29 from "../images/stemtosuccess/stemtosucess29.JPEG";
import stemtosucess4_30 from "../images/stemtosuccess/stemtosucess30.JPEG";

import ronakglobalguru from "../images/stemtosuccess/ronakglobalguru.png";
import globalguru1 from "../images/stemtosuccess/globalguru1.JPEG";
import globalguru2 from "../images/stemtosuccess/globalguru2.JPEG";
import globalguru3 from "../images/stemtosuccess/globalguru3.JPEG";
import globalguru4 from "../images/stemtosuccess/globalguru4.JPEG";
import globalguru from "../images/stemtosuccess/globalguru.JPEG";

import chesslib1 from "../images/stemtosuccess/chesslib1.JPEG";
import chesslib2 from "../images/stemtosuccess/chesslib2.JPEG";
import chesslib3 from "../images/stemtosuccess/chesslib3.JPEG";
import chesslib4 from "../images/stemtosuccess/chesslib4.JPEG";


const stemToSuccessImages = [ 
  stemtosucess4_23,stemtosucess6,stemtosucess4_17,
  stemtosucess4_13,stemtosucess8,stemtosucess4_14,
  stemtosucess4_18,stemtosucess7,stemtosucess2,
  stemtosucess10,stemtosucess4_26,stemtosucess11,
   stemtosucess4_15,stemtosucess5 ,stemtosucess4_29, 
       stemtosucess4_20,stemtosucess4,stemtosucess4_19,
  stemtosucess4_28, stemtosucess4_21 ,stemtosucess4_12,
 stemtosucess4_30, stemtosucess  ,stemtosucess9,
];

// Combine images into arrays
const ronakglobalguruImages = [globalguru,globalguru2,globalguru4,];
const libraryImages = [chesslib1, chesslib2,  chesslib4];
const westUImages = [
     stemtosucess4_27,
     stemtosucess4_16,];
const tdImages = [td1, td2, td3, td4, td5, td6, td7];
const tourImages = [td1, td2, td3,  td6, td7, tour5, tour6,tour11,tour1, tour2, tour3, td4, tour4, tour7, td5,tour8,tour9,tour10,tour12 ];
function StemToSucess() {
  return (
    <div style={pageStyle}>
      {/* Hero Section */}
      <section style={heroStyle}>
            { /*Stem To Sucess Club 2021*/}
            
            {/*<section style={heroStyle}>*/}
{/* Hero Title */}
  <h1 style={heroTitle}>StemToSuccess Club</h1>

  {/* Founders line */}
  <p style={{
    fontSize: "1.1rem",
    fontWeight: "600",
    marginBottom: "18px",
    color: "#1f6f5b",
  }}>
    Founded by Ronak Hiwale & Riona Hiwale (2021)
  </p>

  {/* Summary paragraph */}

<p style={heroSubtitle}>
  Founded in 2021, StemToSuccess Club is a community-driven initiative led by passionate chess and STEM educators.
  The club began with in-person programs and has grown into a hybrid model, offering engaging in-person sessions
  during the summer and virtual learning opportunities throughout the rest of the year. Its mission is to provide
  high-quality educational experiences that foster critical thinking, problem-solving skills, and academic confidence
  in students.
</p>
  

  <p style={heroSubtitle}>

Through structured instruction, mentorship, and community-focused initiatives, 
StemToSuccess Club integrates chess and STEM learning to help students build strategic thinking, resilience,
 and intellectual curiosity. The program emphasizes both skill development and personal growth, 
 creating a supportive environment where students are guided to achieve their full potential.
  </p>
  <p style={heroSubtitle}>
   StemToSuccess Club remains committed to giving back to the community through volunteering, mentoring, 
   and accessible educational programs, supporting students year round through inperson and virtual learning opportunities.
  </p>
  {/* Free Coaching / Guidance Button */}
  <div style={{ textAlign: "center", margin: "30px 0" }}>
    <a
      href="https://forms.gle/ctB9wYizJT2Brjm6A"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: "14px 28px",
        backgroundColor: "#155f4b",
        color: "#fff",
        fontSize: "1.2rem",
        fontWeight: "600",
        borderRadius: "12px",
        textDecoration: "none",
        boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
        transition: "background 0.3s",
        cursor: "pointer",
      }}
    >
      Sign Up for Free Coaching or Guidance
    </a>
  </div>
{/*</section>*/}

        <h1 style={heroTitle}>Photo Gallery</h1>
         { /*Stem To Sucess Club 2021*/}
  

      { /*Stem To Sucess Club 2021*/}
      <section style={{ padding: "40px 20px", maxWidth: "1400px", margin: "auto" }}>
        <h2 style={heroTitle}>StemToSuccess Club, 2021, 2022, 2023, 2024, 2025... Inperson & Virtual</h2>
        <div style={gridStyle}>
          {stemToSuccessImages.map((img, index) => (
            <img key={index} src={img} alt={`TD ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </section>
            { /*Global Guru online BootCamp June-july 2020*/}
      <section style={{ padding: "40px 20px", maxWidth: "1400px", margin: "auto" }}>
        <h2 style={heroTitle}>Global Guru online Summer (June-July) Chess BootCamp 2020, 2021, 2022, 2023, 2024, 2025.. </h2>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}> Chess Instructor Spotlight: At www.globalguru.online(2020) </h2>
       <img src={ronakglobalguru} alt="Global Guru Online chess instructor" style={heroLogoStyle}/>
       <div style={gridStyle}>
          {ronakglobalguruImages.map((img, index) => (
            <img key={index} src={img} alt={`TD ${index + 1}`} style={imageStyle} />
          ))}
        </div>
      </section>

            { /*ChessCamp At Houston Public Library 2020*/}
      <section style={{ padding: "40px 20px", maxWidth: "1400px", margin: "auto" }}>
        <h2 style={heroTitle}>ChessCamp At Houston Public Library(HPL) 2023, 2024, 2025.. </h2>
       <div style={gridStyle}>
          {libraryImages.map((img, index) => (
            <img key={index} src={img} alt={`TD ${index + 1}`} style={imageStyle} />
          ))}
        </div>
             
      </section>
          <section style={{ padding: "40px 20px", maxWidth: "1400px", margin: "auto" }}>
        <h2 style={heroTitle}>Summer Coach at West U recreation Center</h2>
        <div style={gridStyle}>
          {westUImages.map((img, index) => (
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
const heroSubtitle = {
  maxWidth: "900px",
  margin: "20px auto",
  fontSize: "1.2rem",
  color: "#155f4b",
  lineHeight: "1.7",
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
export default StemToSucess;
