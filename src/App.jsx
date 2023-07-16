import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  const [aboutMeState, setAboutMeState] = useState(true);
  const [portfolioState, setPortfolioState] = useState(false);
  const [contactState, setContactState] = useState(false);

  return (
    <div className="App">
      <Header
        setAboutMeState={setAboutMeState}
        setPortfolioState={setPortfolioState}
        setContactState={setContactState}
      />
      {aboutMeState && <AboutMe />}
      {portfolioState && <Portfolio />}
      {contactState && <Contact />}

      <Footer />
    </div>
  );
}

export default App;
