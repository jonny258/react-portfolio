import React from "react";
import Project from "../components/Project";

function Portfolio() {
  return (
    <>
      <section className="portfolio text-center w-100">
        <h1>Portfolio</h1>
        <section className="project-section d-flex flex-wrap justify-content-center align-items-center">
          <Project />
          <Project />
        </section>
      </section>
    </>
  );
}

export default Portfolio;
