import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";
import { NavLink } from "react-router-dom";

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
    color: "white",
    textShadow: "1px 1px 2px black",
    fontSize: "2.5rem",
    fontFamily: "Unica One, cursive",
  },
};

// the navbar contains ABOUT, PORTFOLIO, CONTACT, and RESUME
// when clicked, the corresponding PAGE loads and the navbar item becomes highlighted
// defaults to ABOUT page

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul} className="row nav ">
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="/"
            className={currentPage === "" ? "nav-link active" : "nav-link"}
            style={styles.navbarLink}
          >
            ABOUT
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="/portfolio"
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
            href="/contact"
            className="nav-link"
            activeClassName="nav-link active"
            style={styles.navbarLink}
          >
            CONTACT
          </a>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <a
            href="/resume"
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
