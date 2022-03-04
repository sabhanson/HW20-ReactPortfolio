import React, { useState } from "react";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/Navigation.css'

const styles = {
  nav: {
    // background: "#84a98c",
    width: "100%",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  navbarLink: {
    color: "black",
    fontSize: "1.3rem",
    fontFamily: "Unica One, cursive"
  },
};

// the navbar contains ABOUT, PORTFOLIO, CONTACT, and RESUME
// when clicked, the corresponding PAGE loads and the navbar item becomes highlighted
// defaults to ABOUT page

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul} className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            style={styles.navbarLink}
          >
            ABOUT
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange("Portfolio")}
            className={
              currentPage === "Portfolio" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            PORTFOLIO
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            CONTACT ME
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
            style={styles.navbarLink}
          >
            RESUME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
