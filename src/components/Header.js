// Mynavbar.js
import Container from 'react-bootstrap/Container';
import React from "react";
import "../assets/styles.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import image1 from "../assets/Images/Modern Royal Technology Logo.png";
import { Link } from 'react-router-dom';
function Mynavbar() {
  return (
    <div className="hbg">
      <Navbar expand="lg"  >
      <Container>
        <Navbar.Brand href="#home"><div className="row col-lg-4 col-sm-6">
          <img src={image1} alt="logo" className="hlogo"></img>
        </div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="hcontent">
            <Nav.Link className="me-5">
              <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
            </Nav.Link>
            
            <Nav.Link  className="me-5">
            <Link to="/skills" style={{ textDecoration: 'none' }}>Skills</Link>
            </Nav.Link>

            <Nav.Link className="me-5">
              <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
            </Nav.Link>

            <Nav.Link   className="me-5">
            <Link to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>

            </Nav.Link>

            <Nav.Link   className="me-5">
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Mynavbar;
