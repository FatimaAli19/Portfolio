import "../assets/styles.css";
import React, { useState, useEffect, useRef } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Myabout = () => {
  const [gpaProgress, setGpaProgress] = useState(0);
  const [projectsProgress, setProjectsProgress] = useState(0);
  const [internshipProgress, setInternshipProgress] = useState(0);
  const [adaptabilityProgress, setAdaptabilityProgress] = useState(0);

  const progressSectionRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    const startProgress = () => {
      setGpaProgress(0);
      setProjectsProgress(0);
      setInternshipProgress(0);
      setAdaptabilityProgress(0);

      const intervalId = setInterval(() => {
        setGpaProgress((prev) => (prev < 91 ? prev + 1 : prev));
        setProjectsProgress((prev) => (prev < 40 ? prev + 1 : prev));
        setInternshipProgress((prev) => (prev < 70 ? prev + 1 : prev));
        setAdaptabilityProgress((prev) => (prev < 85 ? prev + 1 : prev));
      }, 30);

      return () => clearInterval(intervalId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startProgress();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (progressSectionRef.current) {
      observer.observe(progressSectionRef.current);
    }

    return () => {
      if (progressSectionRef.current) {
        observer.unobserve(progressSectionRef.current);
      }
    };
  }, []);

  const calculateProjectsText = (progress) => {
    if (progress < 14) return "1+";
    if (progress < 30) return "2+";
    return "3+";
  };

  const calculateExperienceText = (progress) => {
    if (progress < 35) return "1+ yr";
    return "2+ yrs";
  };

  return (
    <div className="bgblack text-white">
      <div className="row" style={{ padding: "100px 50px 40px 0" }} ref={progressSectionRef}>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="text-center heading" data-aos="fade-right">
            <span style={{ fontSize: "70px", marginRight: "19px",fontWeight:"bolder" }}>About.{" "}</span>
             
          </div>
          <div style={{ margin: "0px 40px", padding: "10px" }}>
            <span className="about">
              I am a Computer Science student at Sukkur IBA and a 4-Year Fully
              Funded Scholarship Recipient. Along with the above-mentioned skill
              set, I am proficient in C++, Java, and Data Structures. I am
              passionate about coding and problem-solving. I have completed my
              internship onsite at Nextash. I have built 3+ frontend projects.
              I also have strong communication skills. Committed to continuous
              learning and personal growth. Let's connect and explore the world
              of technology together!
            </span>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="circular-progress-container" data-aos="fade-up">
            <div className="row">
              <ProgressCircle
                title="Projects"
                progress={projectsProgress}
                centerText={calculateProjectsText(projectsProgress)}
              />
              <ProgressCircle
                title="GPA"
                progress={gpaProgress}
                centerText={`${gpaProgress}%`}
              />
            </div>
            <div className="row">
              <ProgressCircle
                title="Experience"
                progress={internshipProgress}
                centerText={calculateExperienceText(internshipProgress)}
              />
              <ProgressCircle
                title="Adaptability"
                progress={adaptabilityProgress}
                centerText={`${adaptabilityProgress}%`}
              />
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
            <stop offset="0%" stopColor="#1a9b11" />
            <stop offset="100%" stopColor="#1a9b11" />
          </linearGradient>
        </defs>
        <circle
          cx="50"
          cy="50"
          r="45"
          strokeLinecap="round"
          style={{ strokeDashoffset }}
        />
      </svg>
      <div className="progress-title">{title}</div>
    </div>
  );
};

export default Myabout;
