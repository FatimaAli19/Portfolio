import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./components/Header";
import Myherosec from "./components/Herosection";
import MySkills from "./components/Skills";
import Myfooter from "./components/Footer";
import Myabout from "./components/About";
import MyContact from "./components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Mynavbar />
      <div>
        <Routes>
          <Route path="/" element={<Myherosec />} />
          <Route path="/skills" element={<MySkills />} />
          <Route path="/about" element={<Myabout />} />
          <Route path="/contact" element={<MyContact />} />
        </Routes>
      </div>
      <Myfooter />
    </Router>
  );
}

export default App;
