import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    border: '2px double white'
  },
  h1: {
    fontSize: '2rem'
  }
}

// this page is loaded when Resume is selected from the navbar
// includes a link to a downloadable resume and a list of my skills (coding and technical)

export default function Resume() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>Resume</h1>
      <a href="/index.html" download={true}>dowload me</a>
    </div>
  );
}
