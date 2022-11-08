import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headshot from "./../../images/123_1.jpg";

const styles = {
  div: {
    paddingBottom: "3rem",
    paddingTop: "2rem",
    background: "#89A98C",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "Unica One, cursive",
    color: "#F4E285",
    textShadow: "2px 2px black",
  },
  h2: {
    fontSize: "8rem",
    textAlign: "start",
    paddingLeft: ".5rem",
  },
  p: {
    padding: "1rem",
    margin: "1.5rem 3rem",
    fontFamily: "Syne, sans-serif",
    // background: "#F4E285",
    // borderRadius: "20px",
    // border: "3px solid #FFA500",
    fontSize: "2rem",
  },
  img: {
    width: "500px",
  },
};

export default function About() {
  return (
    <div className="container" style={styles.div}>
      <div className="row d-flex justify-content-center">
        <img style={styles.img} alt="Sabrina Hanson" src={Headshot} />
        <div className="col-sm-11 col-md-8 col-lg-6 my-3 align-items-center">
          <h2 style={styles.h2}>Sabrina Hanson.</h2>
          <p style={styles.p}>Web developer and creative problem-solver.</p>
        </div>
      </div>
    </div>
  );
}
