import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headshot from "./../../images/123_1.jpg";

const styles = {
  div: {
    paddingBottom: "3rem",
    marginTop: "3rem",
    paddingTop: "2rem",
    // background: "#89A98C",
    height: "80vh",
    fontFamily: "monospace",
    textAlign: "start",
  },
  h2: {
    fontSize: "8rem",
    lineHeight: "1",
    padding: "0",
  },
  p: {
    fontSize: "2rem",
  },
};

//TODO: move github/linkedin/stackoverflow to this page

export default function About() {
  return (
    <div className="container d-flex align-items-center" style={styles.div}>
      <div className="row d-flex justify-content-between">
        <img
          className="col-sm-12 col-md-6 col-lg-6"
          style={styles.img}
          alt="Sabrina Hanson"
          src={Headshot}
        />
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="row align-items-center">
            <h2 className="col-12" style={styles.h2}>
              Sabrina Hanson
            </h2>
            <p className="col-12" style={styles.p}>
              Web developer and creative problem-solver.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

//& github/linkedin/stackoverflow icons and styling

// icon: {
//   color: "black",
//   fontSize: "3rem",
// },
// div: {
//   listStyle: "none",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// },
// li: {
//   padding: ".5rem",
// },
// {
/* <div style={styles.div}>
  <li style={styles.li}>
    <a href="http://github.com/sabhanson" target={"_blank"} rel={"noreferrer"}>
      <i class="bi bi-github" style={styles.icon}></i>
    </a>
  </li>
  <li style={styles.li}>
    <a
      href="http://www.linkedin.com/in/sabrinahanson"
      target={"_blank"}
      rel={"noreferrer"}
    >
      <i class="bi bi-linkedin" style={styles.icon}></i>
    </a>
  </li>
  <li style={styles.li}>
    <a
      href="https://stackoverflow.com/users/17640823/sabrina-hanson"
      target={"_blank"}
      rel={"noreferrer"}
    >
      <i class="bi bi-stack-overflow" style={styles.icon}></i>
    </a>
  </li>
</div>; */
// }
