import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    paddingTop: "2rem",
    height: "100%",
    fontFamily: "Syne, sans-serif",
  },
  icon: {
    color: "#FFA500",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "Unica One, cursive",
    color: "#F4E285",
    textShadow: "2px 2px black",
  },
  list: {
    fontSize: "1.2rem",
  },
  card: {
    fontFamily: "Syne, sans-serif",
    margin: "2rem",
    background: "#F4E285",
    borderRadius: "20px",
    border: "3px solid #FFA500",
  },
};

// this page is loaded when Resume is selected from the navbar
// includes a link to a downloadable resume and a list of my skills (coding and technical)

export default function Resume() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>RESUME</h1>
      <a className="link-dark" href="/Resume.pdf" download={true}>
        DOWNLOAD MY RESUME
      </a>
      <div className="row d-flex justify-content-center">
        <div style={styles.card} className="card col-8 col-md-6">
          <h3>Front End Proficiencies</h3>
          <ul style={styles.list} className="list-group list-unstyled">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>Bootstrap</li>
            <li>React</li>
          </ul>
        </div>
        <div style={styles.card} className="card col-8 col-md-6">
          <h3>Back End Proficiencies</h3>
          <ul style={styles.list} className="list-group list-unstyled">
            <li>APIs</li>
            <li>Express Routing</li>
            <li>Node</li>
            <li>MySQL/Sequelize</li>
            <li>Mongo</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// https://devicon.dev/
