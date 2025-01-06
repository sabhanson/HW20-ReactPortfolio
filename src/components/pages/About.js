import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Headshot from "./../../images/123_1.jpg";
import "../../styles/About.css";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={Headshot} class="rounded" alt="Sabrina Martin" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h1>Sabrina Martin</h1>
          <p>Software engineer with a passion for solving problems.</p>
          <ul>
            <li>
              <a
                href="http://github.com/sabhanson"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a
                href="http://www.linkedin.com/in/sabrinahanson"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/17640823/sabrina-hanson"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <i class="bi bi-stack-overflow"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
