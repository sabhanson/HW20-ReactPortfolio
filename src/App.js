import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
// import Footer from "./components/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// when the app is initially opened, a user will see the main/default page (about me)
// they will see the navbar with:
// ABOUT ME | PORTFOLIO | CONTACT | RESUME
// they will see the about me section displayed in the main area
// SABRINA HANSON, WEB DEVELOPER AND CREATIVE PROBLEM SOLVER.
// LINK TO GITHUB | LINK TO LINKEDIN | LINK TO STACKOVERFLOW

function App() {
  return (
    <div className="App">
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Navigation />
          <div className="container">
            <Routes>
              <Route exact path="sab-react-portfolio/" element={<About />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route
                exact
                path="sab-react-portfolio/portfolio"
                element={<Portfolio />}
              />
              <Route
                exact
                path="sab-react-portfolio/contact"
                element={<Contact />}
              />
              <Route
                exact
                path="sab-react-portfolio/resume"
                element={<Resume />}
              />
            </Routes>
          </div>
          {/* <Footer /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
