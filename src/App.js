import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Header";
import Myherosec from "./components/Herosection";
import MySkills from "./components/Skills";
import Myfooter from "./components/Footer";
import Myabout from "./components/About";
import MyContact from "./components/Contact";
import MyProjects from "./components/Projects"; 
import MyprojectPage from "./components/projectPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <Router>
      <Mynavbar />
      <Routes>
        <Route path="/" element={<Myherosec />} />
        <Route path="/skills" element={<MySkills />} />
        <Route path="/about" element={<Myabout />} />
        <Route path="/projects" element={<MyProjects />} />
        <Route path="/contact" element={<MyContact />} />
        <Route path="/projectPage" element={<MyprojectPage />} /> / 
      </Routes>
      <Myfooter />
    </Router>
    // <>
    //  <Mynavbar />
    //  <Myherosec />
    //  <MySkills />
    //  <Myabout />
    //  <MyProjects />
    //  <MyContact />
    // </>
  );
}

export default App;
