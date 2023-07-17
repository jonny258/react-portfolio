import React, { useState } from "react";

function Header({ setAboutMeState, setPortfolioState, setContactState, setResumeState}) {
  return (
    <section className="nav-header-custom nav-dark w-100">
      <div className="mx-3 w-50 d-flex flex-wrap text-white justify-content-between">
        {/* Change links and make the download path to the resume real */}
        {/* <h3>
          <a className="btn" href="#home-scroll">
            Home
          </a>
        </h3> */}
        <h3>
          <a className="btn" onClick={()=> {
            setAboutMeState(true)
            setPortfolioState(false)
            setContactState(false)
            setResumeState(false)
            
          }}>
            About Me
          </a>
        </h3>
        <h3>
          <a className="btn" onClick={()=> {
            setAboutMeState(false)
            setPortfolioState(true)
            setContactState(false)
            setResumeState(false)
          }}>
            Portfolio
          </a>
        </h3>
        <h3>
          <a className="btn" onClick={()=> {
            setAboutMeState(false)
            setPortfolioState(false)
            setContactState(true)
            setResumeState(false)
          }}>
            Contact
          </a>
        </h3>
        <h3>
          <a className="btn" onClick={()=> {
            setAboutMeState(false)
            setPortfolioState(false)
            setContactState(false)
            setResumeState(true)
          }}>
            Resume
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Header;
