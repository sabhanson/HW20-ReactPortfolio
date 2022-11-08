import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";

// the header renders my name and the navbar items
const styles = {
  div: {
    backgroundImage: `url('https://lh3.googleusercontent.com/pw/AM-JKLW8v_Tku2SjtlxDyGlDKbuCak5iz6EJza_cCeYN4mHIf1YvqfNbGNIsH0QvumVoVCMfdiH6HS9UHH_2iH93r160tkUJebIw-sUgZ-_KRN8aS-NJdlb5kDyCeCDDw1qcKam0j-73ax9Bo2WKWNdY7BAq=w1920-h455-no?authuser=0')`,
    width: "100%",
    paddingTop: "30px",
    height: "200px",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDiv: {
    width: "100%",
    fontSize: "1.3rem",
    color: "white",
  },
  h1: {
    fontSize: "3rem",
    color: "#FFA500",
    fontFamily: "Unica One, cursive ",
    textShadow: "1px 1px 2px black",
  },
};

function Header() {
  return (
    <div>
      {/* <div style={styles.div}>
        <h1 style={styles.h1}>SABRINA HANSON</h1>
        <div style={styles.innerDiv}>
          <p>JUNIOR WEB DEVELOPER</p>
        </div>
      </div> */}
      <Navigation />
    </div>
  );
}

export default Header;
