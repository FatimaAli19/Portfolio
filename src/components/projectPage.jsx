import React, { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/styles.css";

export default function MyProjects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const allProjects = [
    { name: "React Weather App", image: "weather.png", description: "Weather app" },
    { name: "Movie App", image: "movie.png", description: "Movie app" },
    { name: "Portfolio Website", image: "portfolio.png", description: "Portfolio website" },
    { name: "TextUtils Website", image: "textUtils.png", description: "Text utility app" },
  ];

  const [visibleProjects, setVisibleProjects] = useState(allProjects.slice(0, 3));

  const handleViewMore = () => {
    console.log("Button clicked");
    setVisibleProjects(allProjects);
  };

  return (
    <div>
      <div className="row">
        {visibleProjects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      {visibleProjects.length < allProjects.length && (
        <button onClick={handleViewMore}>View More</button>
      )}
    </div>
  );
}
