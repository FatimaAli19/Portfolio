import React from "react";
import Reactlogo from "../assets/Images/ToolsLogo/react.png";
import js from "../assets/Images/ToolsLogo/image 4.png";
import MySQl from "../assets/Images/ToolsLogo/mysql.png";
import figma from "../assets/Images/ToolsLogo/figma.png";
import python from "../assets/Images/ToolsLogo/Python.png";
import angular from "../assets/Images/ToolsLogo/angular.png";
import nodejs from "../assets/Images/ToolsLogo/node.png";
import mongodb from "../assets/Images/ToolsLogo/mongodb.png";
import "../assets/styles.css";

function MySkills() {
  return (
    <div className="skills-container  bgblack ">
      <div className="centercontainer">
        <div className="greenrec">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="bg-green">
        
          <div className="  text-white   skill">
            <span>
              <img src={Reactlogo} alt="ReactLogo" className="logo" />
            </span>
            <span>React</span>
          </div>
          <div  className="  text-white  skill">
            <span>
              <img src={js} alt="ReactLogo" className="logo" />
            </span>
            <span>JavaSript</span>
          </div>
          <div  className="  text-white   skill">
            <span>
              <img src={angular} alt="ReactLogo" className="logo" />
            </span>
            <span>Angular</span>
          </div>
          <div  className="  text-white  skill">
            <span>
              <img src={nodejs} alt="ReactLogo" className="logo" />
            </span>
            <span>Nodejs</span>
          </div>
         
        
          <div   className="  text-white   skill">
            <span>
              <img src={figma} alt="ReactLogo" className="logo" />
            </span>
            <span>figma</span>
          </div>
          <div  className="  text-white   skill">
            <span>
              <img src={mongodb} alt="ReactLogo" className="logo" />
            </span>
            <span>Mongodb</span>
          </div>
          <div  className="  text-white   skill">
            <span>
              <img src={MySQl} alt="ReactLogo" className="logo" />
            </span>
            <span>MySQL</span>
          </div>
          <div className="  text-white  skill">
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
