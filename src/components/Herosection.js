import React from "react";
import myImage from "../assets/Images/hello.png";
import profile from "../assets/Images/profile.png";
import github from "../assets/Images/github (2).png";
import linkedin from "../assets/Images/linkedin.png";
import instagram from "../assets/Images/instagram.png";
function Myherosec() {
  return (
    <div className="herocontainer  ">
      <div className="row">
        <div className="col-lg-2 col-sm-4 mt-5 p-5 social-icons">
          <div className="mt-5">
            <a href="https://github.com/FatimaAli19" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="himg" /></a> 
          </div>
          <div className="mt-5">
            <a href="https://www.linkedin.com/in/fatima-ali-a51406240/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" className="himg" /></a>
          </div>
          <div className="mt-5">
            <a href="https://www.linkedin.com/in/fatima-ali-a51406240/" target="_blank" rel="noopener noreferrer"> <img src={instagram} alt="instagram" className="himg" /></a>
          </div>
        </div>

        <div className="col-lg-6 col-sm-8 mt-3">
          <div className="container hrec ">
            <img className="himg mb-4 waving-image" src={myImage} alt="Hello gesture" />
            <span className="htext text-white mt-2">I am Fatima Ali</span>
          </div>
          <span className="htext text-white">Empowering digital innovation as a </span>
          <span className="htextbold">Software Engineer </span>
          <span className="htext text-white">specializing in </span>
          <span className="htextbold">Web Development</span>
        </div>
        <div className="col-lg-4 col-sm-12 profimg ">
          <img src={profile} alt="Profile  " />
        </div>
      </div>
    </div>
  );
}

export default Myherosec;
