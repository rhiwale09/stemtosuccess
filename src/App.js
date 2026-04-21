import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"; // your main page (move current App content into Home.js)
import Programs from "./pages/Programs";
import Tournaments from "./pages/Tournaments";
import Gallery from "./pages/Gallery";
import StemToSucess from "./pages/StemToSucess";
import Testimonials from "./pages/Testimonials";
import Payments from "./pages/Payments";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import logo from "./images/logo.png";

function App() {
  return (
    <Router>
      <nav style={navStyle}>
         <img src={logo} alt="RRRK Solutions Logo" style={logoStyle} />
        <Link to="/">Home</Link>
         <Link to="/programs">Programs</Link>
        <Link to="/tournaments"> FridayCheckmateChallenge Club</Link>
        <Link to="/stemtosucess">StemToSucess Club</Link>
        <Link to="/signup">Sign Up</Link>
       
        <Link to="/gallery">Gallery</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/stemtosucess" element={<StemToSucess />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/payments" element={<Payments />} />
         <Route path="/testimonials" element={<Testimonials />} />
         <Route path="/gallery" element={<Gallery />} />          
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const navStyle = {
  display: "flex",
  gap: "30px",
  padding: "15px",
  background: "#eafaf1",
  justifyContent: "center",
};
const logoStyle = {
  height: "50px",
  width: "auto"
};


export default App;
