import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import projects from "../../data/projects";

const styles = {
  mainDiv: {
    display: "flex",
    justifyContent: "center",
    paddingBottom: "3rem",
    height: "100%",
  },
  cardDiv: {
    margin: "1rem",
    borderRadius: "10px",
    fontFamily: "Syne, sans-serif",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "Unica One, cursive",
    color: "#F4E285",
    paddingTop: "2rem",
    textShadow: "2px 2px black",
  },
  icon: {
    color: "#FFA500",
    fontSize: "2rem",
  },
  img: {
    // maxHeight: "60%",
    // width: "auto",
  },
};

// this page is loaded when portfolio is selected from the navbar
// includes six PROJECTS with github links, deployed links, and short descriptions about the projects

export default function Portfolio() {
  return (
    <div style={styles.mainDiv} className="row">
      {projects.map((project) => (
        <div
          style={styles.cardDiv}
          className="card col-sm-12 col-md-5"
          key={project.id}
        >
          <img
            style={styles.img}
            src={project.imageURL}
            alt="alt text"
            className="card-img-top img img-fluid"
          />
          <div className="card-body">
            <p className="card-text text-black">{project.name}</p>
            <hr />
            <div className="card-body">
              <a
                href={project.githubURL}
                target={"_blank"}
                className="card-link"
                rel={"noreferrer"}
              >
                <i style={styles.icon} className="bi bi-github"></i>
              </a>
              <a
                href={project.deployedURL}
                target={"_blank"}
                className="card-link"
                rel={"noreferrer"}
              >
                <i style={styles.icon} class="bi bi-globe"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
