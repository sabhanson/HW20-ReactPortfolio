import React, { useState } from "react";
import Navigation from "./Navigation";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "./projects";

// the header renders my name and the navbar items
const styles = {
  div: {
    backgroundImage: `url('./pearl-lake.jpg')`,
    width: "100%",
    paddingTop: '30px',
    // display: "flex",
    height: "200px",
    border: "3px dotted #ffa500",
    borderRadius: "20px",
    justifyContent: "center",
    alignItems: "center",
  },
  innerDiv: {
    width: '100%',
    fontSize: '1.3rem'
  },
  h1: {
    fontSize: "3rem",
    color: "black",
    fontFamily: "Unica One, cursive ",
    textShadow: "1px 1px 2px #FFA500",
  },
  p: {
    fontSize: "2rem",
  },
};

function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio projects={projects} />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div style={styles.div}>
        <h1 style={styles.h1}>SABRINA HANSON</h1>
        <div style={styles.innerDiv}>
          <p>jr web developer</p>
        </div>
      </div>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
    </div>
  );
}

export default Header;
