import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  p: {
    fontSize: "2rem",
    paddingRight: ".5rem",
    textAlign: "end",
    fontFamily: "Syne, sans-serif",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.p}>&copy; 2022</p>
    </footer>
  );
}

export default Footer;
