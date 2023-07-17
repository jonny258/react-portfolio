import React from "react";

function Resume() {
  return (
    <>
      <section className="resume-section">
        <div>
          <h1>Resume</h1>
          <a
            className="btn btn-primary"
            href="/Standard RESUME - Jonathan Olsen.pdf"
            download
          >
            Download Resume
          </a>
        </div>
        <div>
          <h2>Proficiencies</h2>
          <div className="profish">
              <ul>
                <li>JavaScript ES6+</li>
                <li>CSS3</li>
                <li>HTML5</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Git</li>
                <li>Six Sigma</li>
                <li>Node.js</li>
              </ul>
              <ul>
                <li>MySQL</li>
                <li>NoSQL</li>
                <li>MERN Stack</li>
                <li>MongoDB</li>
                <li>Backend development</li>
                <li>Python</li>
                <li>REST APIs</li>
                <li>Express.js</li>
                <li>AI tools</li>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
