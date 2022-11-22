import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    paddingTop: "2rem",
    height: "100%",
    fontFamily: "Syne, sans-serif",
  },
  icon: {
    color: "black",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "Unica One, cursive",
    color: "#F4E285",
    textShadow: "2px 2px black",
  },
  list: {
    fontSize: "1.2rem",
    display: "flex",
    justifyContent: "center",
  },
  card: {
    fontFamily: "Syne, sans-serif",
    margin: "2rem",
  },
};

export default function Contact() {
  return (
    <div style={styles.div}>
      <div className="row d-flex justify-content-center">
        <div style={styles.card} className="card col-8 col-md-6">
          <h3>Contact Me</h3>
          <ul style={styles.list} className="list-group list-unstyled">
            <li>
              <a
                href="mailto:sabhanson7@gmail.com"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i style={styles.icon} class="bi bi-envelope-fill"></i>
              </a>
            </li>
            <li>
              <a
                href="http://github.com/sabhanson"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i style={styles.icon} class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
