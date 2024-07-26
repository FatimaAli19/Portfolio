// Mynavbar.js
import Container from 'react-bootstrap/Container';
import React from "react";
import "../assets/styles.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 
import { Link } from 'react-scroll';
function Mynavbar() {
  return (
    <div className="hbg">
      <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className='text-white'>Portfolio</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="hcontent">
            <Nav.Link className="me-5">
              <Link to="/" style={{ textDecoration: 'none' }} smooth={true} duration={500}>Home</Link>
            </Nav.Link>
            
            <Nav.Link  className="me-5">
            <Link to="/skills" style={{ textDecoration: 'none' }} smooth={true} duration={500}>Skills</Link>
            </Nav.Link>

            <Nav.Link className="me-5">
              <Link to="/about" style={{ textDecoration: 'none' }} smooth={true} duration={500}>About</Link>
            </Nav.Link>

            <Nav.Link   className="me-5">
            <Link to="/projects" style={{ textDecoration: 'none' }} smooth={true} duration={500}>Projects</Link>

            </Nav.Link>

            <Nav.Link   className="me-5">
            <Link to="/contact" style={{ textDecoration: 'none' }} smooth={true} duration={500}>Contact</Link>
            </Nav.Link>
            <Nav.Link   className="me-5">
              <button className='Resumebtn text-white'>

             Download Resume
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default Mynavbar;
