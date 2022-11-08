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
  p: {
    padding: "1rem",
    margin: "1.5rem 3rem",
    fontFamily: "Syne, sans-serif",
    background: "#F4E285",
    borderRadius: "20px",
    border: "3px solid #FFA500",
    fontSize: "1rem",
  },
  img: {
    width: "250px",
  },
};

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>ABOUT ME</h1>
      {/* TODO: take a better headshot */}
      <img style={styles.img} alt="Sabrina Hanson" src={Headshot} />
      <div className="row d-flex justify-content-center">
        <div className="col-sm-11 col-md-8 col-lg-6 my-3">
          <p style={styles.p}>
            I'm a recent coding bootcamp graduate looking to expand my skills
            and knowledge. I have experience with both front and back end
            development. I am particularly passionate about HTML and CSS to make
            the web more pleasant and beautiful. I live in SW Washington state
            with my partner and our two dogs. My hobbies include thrift
            shopping, road trips, photography, and making stained glass art.
          </p>
        </div>
      </div>
    </div>
  );
}
