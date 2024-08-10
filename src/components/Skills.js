import React from "react";
import AOS from "aos";
import Reactlogo from "../assets/Images/ToolsLogo/react.png";
import js from "../assets/Images/ToolsLogo/image 4.png";
import MySQl from "../assets/Images/ToolsLogo/mysql.png";
import figma from "../assets/Images/ToolsLogo/figma.png";
import python from "../assets/Images/ToolsLogo/Python.png";
import angular from "../assets/Images/ToolsLogo/angular.png";
import nodejs from "../assets/Images/ToolsLogo/node.png";
import mongodb from "../assets/Images/ToolsLogo/mongodb.png";
import { useEffect } from "react";
import "../assets/styles.css";
 
function MySkills() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 20,
      once: false,
    });
  }, []);
  return (
    <div className="bgblack" style={{padding:'100px 50px 100px 50px'}}>
      <div className="row d-flex justify-content-center align-items-center" style={{ padding: "100px 50px 40px 0" }}>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="text-center heading text-white">
            <span style={{ fontSize: "70px", marginRight: "19px" }}>
              My{" "}
            </span>
            <span className="textgreen">Skills</span>
          </div>
        </div>
      </div>
      <div className="bg-green" style={{margin:'40px 70px 0'}}>
          <div className="text-white skill " data-aos="zoom-out-down">
            <span>
              <img src={Reactlogo} alt="ReactLogo" className="logo" />
            </span>
            <span>React</span>
          </div>
          <div  className="  text-white  skill " data-aos="zoom-out-down">
            <span>
              <img src={js} alt="ReactLogo" className="logo" />
            </span>
            <span>JavaSript</span>
          </div>
          <div  className="  text-white   skill" data-aos="zoom-out-down">
            <span>
              <img src={angular} alt="ReactLogo" className="logo" />
            </span>
            <span>Angular</span>
          </div>
          <div  className="  text-white  skill" data-aos="zoom-out-down">
            <span>
              <img src={nodejs} alt="ReactLogo" className="logo" />
            </span>
            <span>Nodejs</span>
          </div>
         
        
          <div   className="  text-white   skill" data-aos="zoom-out-down">
            <span>
              <img src={figma} alt="ReactLogo" className="logo" />
            </span>
            <span>figma</span>
          </div>
          <div  className="  text-white   skill" data-aos="zoom-out-down">
            <span>
              <img src={mongodb} alt="ReactLogo" className="logo" />
            </span>
            <span>Mongodb</span>
          </div>
          <div  className="  text-white   skill" data-aos="zoom-out-down">
            <span>
              <img src={MySQl} alt="ReactLogo" className="logo" />
            </span>
            <span>MySQL</span>
          </div>
          <div className="  text-white  skill" data-aos="zoom-out-down">
            <span>
              <img src={python} alt="ReactLogo" className="logo" />
            </span>
            <span>Python</span>
          </div>
         
      </div>
    </div>
  );
}

export default MySkills;
