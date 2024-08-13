import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Header";
import Myherosec from "./components/Herosection";
import MySkills from "./components/Skills";
import Myfooter from "./components/Footer";
import Myabout from "./components/About";
import MyContact from "./components/Contact";
import MyProjects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
      once: false,
    });
    AOS.refresh(); // Ensure AOS rechecks all elements
  }, []);

  return (
    <>
      <Mynavbar />
      <div id="home">
        <Myherosec />
      </div>
      <div id="skills">
        <MySkills />
      </div>
      <div id="about">
        <Myabout />
      </div>
      <div id="projects">
        <MyProjects />
      </div>
      <div id="contact">
        <MyContact />
      </div>
      <Myfooter />
    </>
  );
}

export default App;
