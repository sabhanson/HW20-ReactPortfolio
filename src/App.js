import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const styles = {
  app: {
    background: "#84A98C",
    height: "100vh",
  },
};
// when the app is initially opened, a user will see the main/default page (about me)
// they will see the navbar with:
//SABRINA HANSON-----ABOUT ME | PORTFOLIO | CONTACT | RESUME
// they will see the about me section displayed in the main area
// I AM SABRINA...pic of me...info about me
// they will see the footer
// LINK TO GITHUB | LINK TO LINKEDIN

//TODO: react-router-dom instead of useState routing
function App() {
  return (
    <div className="App" style={styles.app}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
