import React from "react";
import Project from "../components/Project";
import projectData from "./projectData";


function Portfolio() {

  const getDataHandler = async () => {
    try {
  console.log(projectData);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  return (
    <>
      <section className="portfolio text-center w-100">
        <h1 onClick={getDataHandler}>Portfolio</h1>
        <section className="project-section d-flex flex-wrap justify-content-center align-items-center">
          {projectData.map((project, index) => {
            return <Project project={project} key={index}/> 
          })}
        </section>
      </section>
    </>
  );
}

export default Portfolio;
