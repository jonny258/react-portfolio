import React from 'react'
import '../assets/project.css'

function Project() {
  return (
    <div className="project d-flex flex-wrap justify-content-center align-items-center rounded-2">
    <div className="project-text">
      <div className="project-titles d-flex justify-content-between">
        <h3>Tyr's Vault</h3>
        <a href="https://github.com/jonny258/Tyrs-Vault">
          <h3>GitHub</h3>
        </a>
        <a href="https://tyrs-vault.herokuapp.com/">
          <h3>Deployed site</h3>
        </a>
      </div>
      <div className="project-tech-chal d-flex justify-content-between">
        <div className="project-tech">
          <h6>Technologies used</h6>
          <ul>
            <li>Sequelize</li>
            <li>MySql</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Rawg API</li>
          </ul>
        </div>
        <div className="project-chal">
          <h6>Challenges</h6>
          <p>
            Navigating the intricacies of the MVC framework proved to be quite challenging.
            However, through determination and perseverance, I eventually unravelled its
            complexities. The journey was arduous, but it bestowed upon me valuable insights and
            a profound sense of accomplishment.
          </p>
        </div>
      </div>
      <div className="project-sum">
        <h6>Summary</h6>
        <p>
          Tyr's Vault is a user-friendly application designed to help gamers track the games they
          play, connect with friends, and manage their profiles across various gaming platforms.
        </p>
      </div>
    </div>
    <a href="https://tyrs-vault.herokuapp.com/">
      <img src="images/project-images/tyrs-vault.jpg" alt="Tyr's Vault" />
    </a>
  </div>
  )
}

export default Project