import React from "react";
import { Link } from "react-router-dom";

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 30px",
  background: "#2ecc71",
  color: "#fff",
};

const linkStyle = {
  color: "#fff",
  margin: "0 10px",
  textDecoration: "none",
  fontWeight: "bold",
};

function Navbar() {
  return (
    <nav style={navStyle}>
      <h3>Ronak Academy</h3>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/programs" style={linkStyle}>Programs</Link>
        <Link to="/founders" style={linkStyle}>Founders</Link>
        <Link to="/tournaments" style={linkStyle}>Tournaments</Link>
        <Link to="/gallery" style={linkStyle}>Gallery</Link>
        <Link to="/testimonials" style={linkStyle}>Testimonials</Link>
        <Link to="/payments" style={linkStyle}>Payments</Link>
        <Link to="/signup" style={linkStyle}>Sign Up</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
