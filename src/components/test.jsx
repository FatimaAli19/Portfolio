import React from "react";
import { Link, Element } from "react-scroll";

function SimpleTest() {
  return (
    <div>
      <Link to="home" smooth={true} duration={500}>
        Home
      </Link>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>

      <Element name="home" style={{ marginTop: "500px", height: "500px" }}>
        <h1>Home Section</h1>
      </Element>

      <Element name="about" style={{ marginTop: "500px", height: "500px" }}>
        <h1>About Section</h1>
      </Element>
    </div>
  );
}

export default SimpleTest;
