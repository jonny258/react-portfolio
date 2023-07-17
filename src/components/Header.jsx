import React, { useState } from "react";

function Header({
  setAboutMeState,
  setPortfolioState,
  setContactState,
  setResumeState,
  aboutMeState,
  portfolioState,
  contactState,
  resumeState,
}) {
  return (
    <section className="nav-header-custom nav-dark w-100">
      <div className="mx-3 w-50 d-flex flex-wrap text-white justify-content-between">
        <h2>Jonny's Portfolio</h2>
        <h3 className={aboutMeState ? 'font-highlight' : ''}>
          <a

            className="btn"
            onClick={() => {
              setAboutMeState(true);
              setPortfolioState(false);
              setContactState(false);
              setResumeState(false);
            }}
          >
            About Me
          </a>
        </h3>
        <h3 className={portfolioState ? 'font-highlight' : ''}>
          <a
            className="btn"
            onClick={() => {
              setAboutMeState(false);
              setPortfolioState(true);
              setContactState(false);
              setResumeState(false);
            }}
          >
            Portfolio
          </a>
        </h3>
        <h3 className={contactState ? 'font-highlight' : ''}>
          <a
            className="btn"
            onClick={() => {
              setAboutMeState(false);
              setPortfolioState(false);
              setContactState(true);
              setResumeState(false);
            }}
          >
            Contact
          </a>
        </h3>
        <h3 className={resumeState ? 'font-highlight' : ''}>
          <a
            className="btn"
            onClick={() => {
              setAboutMeState(false);
              setPortfolioState(false);
              setContactState(false);
              setResumeState(true);
            }}
          >
            Resume
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Header;
