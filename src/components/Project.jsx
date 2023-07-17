import React from "react";
import "../assets/project.css";

function Project({ project }) {
  return (
    <div className="project d-flex flex-wrap justify-content-center align-items-center rounded-2">
      <div className="project-text">
        <div className="project-titles d-flex justify-content-between">
          <h3>{project.name}</h3>
          <a href={project.githubLink}>
            <h3>GitHub</h3>
          </a>
          <a href={project.deployedLink}>
            <h3>Deployed site</h3>
          </a>
        </div>
        <div className="project-tech-chal d-flex justify-content-between">
          <div className="project-tech">
            <h6>Technologies used</h6>
            <ul>
              {project.technologies.map((tech, index) => {
                return <li key={index}>{tech}</li>;
              })}
            </ul>
          </div>
          <div className="project-chal">
            <h6>Challenges</h6>
            <p>{project.challenges}</p>
          </div>
        </div>
        <div className="project-sum">
          <h6>Summary</h6>
          <p>{project.summary}</p>
        </div>
      </div>
      <a href={project.deployedLink}>
        <img src={project.imageLink} alt={project.name} />
      </a>
    </div>
  );
}

export default Project;
