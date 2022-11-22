import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navigation.css";
import { Link } from "react-router-dom";

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
    fontFamily: "Syne, sans-serif",
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
          <Link to="/" style={styles.navbarLink}>
            ABOUT
          </Link>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <Link to="/portfolio" style={styles.navbarLink}>
            PORTFOLIO
          </Link>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <Link to="/contact" style={styles.navbarLink}>
            CONTACT
          </Link>
        </li>
        <li className="nav-item col-sm-12 col-md-3">
          <Link to="/resume" style={styles.navbarLink}>
            RESUME
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
