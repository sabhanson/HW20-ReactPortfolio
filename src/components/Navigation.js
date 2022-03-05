import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";

const styles = {
  nav: {
    // background: "#84a98c",
    width: "100%",
  },
  ul: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navbarLink: {
    color: "black",
    fontSize: "1.3rem",
    fontFamily: "Unica One, cursive",
  },
};

// the navbar contains ABOUT, PORTFOLIO, CONTACT, and RESUME
// when clicked, the corresponding PAGE loads and the navbar item becomes highlighted
// defaults to ABOUT page

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul} className="row nav nav-tabs">
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
            style={styles.navbarLink}
          >
            ABOUT
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
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
        <li className="nav-item col-sm-12 col-md-3">
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
        <li className="nav-item col-sm-12 col-md-3">
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
