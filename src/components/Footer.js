import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  footer: {
    background: "#84A98C",
  },
  icon: {
    color: "#D4E09B",
    fontSize: "3rem",
  },
  div: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  li: {
    padding: ".5rem",
  },
  p: {
    fontSize: ".8rem",
    textAlign: "Center",
    fontFamily: "Syne, sans-serif",
  },
};

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.div}>
        <li style={styles.li}>
          <a href="http://github.com/sabhanson" target={"_blank"}>
            <i class="bi bi-github" style={styles.icon}></i>
          </a>
        </li>
        <li style={styles.li}>
          <a href="http://www.linkedin.com/in/sabrinahanson" target={"_blank"}>
            <i class="bi bi-linkedin" style={styles.icon}></i>
          </a>
        </li>
        <li style={styles.li}>
          <a
            href="https://stackoverflow.com/users/17640823/sabrina-hanson"
            target={"_blank"}
          >
            <i class="bi bi-stack-overflow" style={styles.icon}></i>
          </a>
        </li>
      </div>
      <p style={styles.p}>&copy; SABRINA HANSON 2022</p>
    </footer>
  );
}

export default Footer;
