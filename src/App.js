 import ReactScroll from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Header";
import Myherosec from "./components/Herosection";
import MySkills from "./components/Skills";
import Myfooter from "./components/Footer";
import Myabout from "./components/About";
import MyContact from "./components/Contact";
import { Element } from "react-scroll";
import MyProjects from "./components/Projects";
function App() {
  return (
    <>
      <Mynavbar />

      <div>
        <Element name="/">
          <Myherosec />
        </Element>
        <Element name="/skills">
          <MySkills />
        </Element>
        <Element name="/about">
          <Myabout />
        </Element>
        <Element name="/projects">
          <MyProjects/>
        </Element>
        <Element name="/contact">
          <MyContact />
        </Element>
      </div>
      <Myfooter />
    </>
  );
}

export default App;
