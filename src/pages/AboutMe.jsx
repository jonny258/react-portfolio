import React from "react";

const AboutMe = () => {
  return (
    //
    <div>
      <h1>About me</h1>
      <div className="d-flex flex-wrap text-center align-items-center justify-content-between">
        <div className="d-flex flex-column align-items-center">
          <img src="/images/designer.jpg" />
          <h4>Designer</h4>
          <p>
            Designing web experiences with creativity, precision, and
            user-centricity
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="/images/skills/creator.jpg" />
          <h4>Creator</h4>
          <p>Innovating with code to bring ideas to life on web</p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="/images/skills/problem-solver.jpg" />
          <h4>Problem solver</h4>
          <p>
            Analyzing, debugging and implementing solutions for seamless web
            experiences
          </p>
        </div>
        <div className="d-flex flex-column align-items-center">
          <img src="/images/skills/always-learning.jpg" />
          <h4>Always learning</h4>
          <p>
            Passionately exploring new technologies to build better web
            solutions
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <section>
          <div className="d-flex align-items-center">
            <img src="/images/DSC_0818.jpg" />
          </div>
          <h3>Jonny Olsen</h3>
          <h6>Fullstack Web Developer</h6>
          <p>
            As a Full Stack Web Developer with a manufacturing background, I
            optimize processes. With a Certificate in Full Stack Web
            Development, I can bring projects to life. My process-oriented
            problem-solving skills and expertise in manufacturing and web
            development can offer valuable insights to drive business growth.
          </p>
        </section>
        <section>
          <h2>Techstack</h2>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/HTML.jpg" />
              <h4>HTML</h4>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/CSS.png" />
              <h4>CSS</h4>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/JS.jpg" />
              <h4>JavaScript</h4>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/Node.jpg" />
              <h4>Node.js</h4>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/React.png" />
              <h4>React.js</h4>
            </div>
            <div className="mx-2 d-flex flex-column align-items-center">
              <img src="/images/tech-stack-icons/SQL.png" />
              <h4>SQL</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
