import "../assets/styles.css";
import React, { useState, useEffect } from "react";

const Myabout = () => {
  const [gpaProgress, setGpaProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);
  const [internshipProgress, setInternshipProgress] = useState(0);
  const [presentationProgress, setPresentationProgress] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setGpaProgress((prev) => (prev < 91 ? prev + 1 : prev));
      setProjectsProgress((prev) => (prev < 40 ? prev + 1 : prev));
      setInternshipProgress((prev) => (prev < 70 ? prev + 1 : prev));
      setPresentationProgress((prev) => (prev < 95 ? prev + 1 : prev));
    }, 30);

    return () => clearInterval(intervalId);
  }, []);
  const calculateProjectsText = (progress) => {
    if (progress < 14) return "1+";
    if (progress < 30) return "2+";
    return "3+";
  };
  const calculateExpierienceText = (progress) => {
    if (progress < 35) return "1+ yr";
    return "2+ yrs";
  };
  return (
    <div className="bgblack text-white">
      <div className="row" style={{ padding: "100px 50px 40px 0" }}>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="text-center heading">
            <span style={{ fontSize: "80px", marginRight: "19px" }}>
              About{" "}
            </span>
            <span className="textgreen">Me</span>
          </div>
          <div style={{ margin: "0px 40px", padding: "10px" }}>
            <span className="about">
              I am a Computer Science student at Sukkur IBA and 4-Year Fully
              Funded Scholarship Recipient. Along with the above mentioned skill
              set I am proficient in C++ ,Java and Data Structures. I am
              passionate about coding and problem-solving. Committed to
              continuous learning and personal growth. Let's connect and explore
              the world of technology together!
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="circular-progress-container">
            <div className="row">
              <ProgressCircle title="Projects" progress={projectsProgress} centerText={calculateProjectsText(projectsProgress)}  />
              <ProgressCircle title="GPA" progress={gpaProgress} centerText={`${gpaProgress}%`} />
            </div>
            <div className="row">
              <ProgressCircle title="Experience" progress={internshipProgress} centerText={calculateExpierienceText(projectsProgress)}/>
              <ProgressCircle title="Presentation" progress={presentationProgress} centerText={`${presentationProgress}%`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgressCircle = ({ title, progress, centerText }) => {
  const strokeDashoffset = 300 - (progress / 100) * 300;
  return (
    <div className="circular-progress">
      <div className="outer">
        <div className="inner">
          <div id="number">{centerText}</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100px"
        height="100px"
      >
        <defs>
          <linearGradient id="GradientColor">
            <stop offset="0%" stop-color="#1a9b11" />
            <stop offset="100%" stop-color="#1a9b11" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" stroke-linecap="round" style={{ strokeDashoffset }} />
      </svg>
      <div className="progress-title">{title}</div>
    </div>
  );
};

export default Myabout;
