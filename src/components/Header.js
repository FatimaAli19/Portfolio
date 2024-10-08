import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "../assets/styles.css";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function MyNavbar() {
  const resumeURL =
    "https://drive.google.com/file/d/1wtigaavAhHz6ZqJqTmsJMONX5PBlzgQW/view?usp=sharing";
  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#237217" }}
    >
      <Container>
        <Navbar.Brand
          className="text-white"
          style={{ fontSize: "2rem" }}
          onClick={() => scrollToSection("home")}
        >
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link
              className="nav-link-custom text-white"
              onClick={() => scrollToSection("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom text-white"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom text-white"
              onClick={() => scrollToSection("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom text-white"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className="nav-link-custom text-white"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Nav.Link>
            <Button
              className="btn"
              variant="#00ff00"
              href={resumeURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                fill="currentColor"
                class="bi bi-download mx-2 mb-2"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
