import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/styles.css";

export default function MyProjects() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const projects = [
    {
      name: "React Weather App",
      image: require("../assets/Images/weather.png"),
      link: "https://github.com/FatimaAli19/weatherApp_project1",
      description:
        "Stay ahead of the forecast with my interactive React Weather App! This responsive web application provides current and forecasted weather conditions, allowing users to plan their days with confidence. Built with React, this app showcases my ability to work with APIs, manage state, and create a seamless user experience",
    },
    {
      name: "Movie App (Desicinemas) Clone",
      image: require("../assets/Images/desicinema.png"),
      link: "",
      description:
        "Get ready to roll out the red carpet with my Movie Website Clone! This React-built project replicates the look and feel of a popular movie ticketing platform, demonstrating my skills in UI/UX design, data management, and responsive development. Users can browse movies, check showtimes, and even purchase tickets - all within a seamless and intuitive interface.",
    },
    {
      name: "Portfolio Website",
      image: require("../assets/Images/portfolio.png"),
      link: "",
      description:
        "Welcome to my digital abode! This portfolio website, built with React, showcases my technical expertise and creative flair. With a focus on user experience and accessibility, I have crafted a platform that highlights my projects, skills, and passions. Take a tour to learn more about my approach to web development and how I can help bring your vision to life!",
    },
    {
      name: "TextUtils Website",
      image: require("../assets/Images/textUtils.png"),
      link: "",
      description:
        "The ultimate writing companion, Need a quick summary of your text? Our tool generates a summary, providing an overview of the content. Whether you need your text to be in all caps or lowercase, we've got you covered.",
    },
  ];

  const showMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="bgblack" style={{ padding: "0px 50px 100px 0" }}>
       <div className="row d-flex justify-content-center align-items-center" style={{ padding: "100px 50px 40px 0" }}>
        <div className="col-lg-6 col-sm-12 col-md-12">
          <div className="text-center heading text-white">
            <span style={{ fontSize: "70px", marginRight: "19px" }}>
              My{" "}
            </span>
            <span className="textgreen">Projects</span>
          </div>
        </div>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="row">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="cardStyle" data-aos={index < 3 ? "flip-right" : ""}>
                <div
                  style={{
                    backgroundImage: `url(${project.image})`,
                    backgroundSize: "cover",
                    borderRadius: "12px",
                    width: "100%",
                    height: "200px",
                  }}
                  className="arrow"
                >
                  <div className="projectDetail p-2">
                    <p style={{ fontSize: "24px" }}>{project.name}</p>
                    <span>{project.description}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="rgb(84, 204, 84)"
                    className="bi bi-arrow-right-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
          {visibleProjects < projects.length && (
            <button className="btn viewBtn" onClick={showMoreProjects}>
              View More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
