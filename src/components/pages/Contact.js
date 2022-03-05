import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    padding: "2rem 0 10rem 0",
    background: "#89A98C",
  },
  h1: {
    fontSize: "3rem",
    fontFamily: "Unica One, cursive",
    color: "#F4E285",
    textShadow: "2px 2px black",
  },
  inputs: {
    width: "100%",
    background: "#F4E285",
    border: "3px solid #FFA500",
    borderRadius: "8px",
    resize: "none",
    fontFamily: "Syne, sans-serif",
    margin: ".2rem",
  },
  submit: {
    background: "#F4E285",
    borderRadius: "10px",
    border: "2px solid black",
    fontFamily: "Unica One, cursive",
    color: "black",
    width: "80px",
    fontWeight: "bold",
  },
  p: {
    paddingTop: "4rem",
    fontFamily: "Syne, sans-serif",
  },
};

export default function Contact() {
  // const [focus, setFocus] = useState("Unfocus");

  // const handleFocusChange = (state) => setFocus(state);

  const validateName = (name) => {
    if (name === "" || name.length < 1 || name.length > 50) {
      window.alert("Please enter a name between 1 and 50 characters");
    }
  };

  const validateEmail = (email) => {
    if (/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(email)) {
      return true;
    } else {
      window.alert("Please enter an email in valid format, email@website.com");
    }
  };

  const validateMessage = (message) => {
    if (message === "" || message.length > 300 || message.length < 20) {
      window.alert("Please enter a message between 20 and 300 characters");
    }
  };

  const submit = () => {
    console.log("submitted");
  };

  return (
    <div className="row justify-content-center" style={styles.div}>
      <h1 style={styles.h1}>CONTACT ME</h1>
      <form className="col-10 col-md-6">
        {/* NAME INPUT */}
        <input
          // onFocus={() => handleFocusChange("Focus")}
          onBlur={(e) => {
            const name = e.target.value;
            validateName(name);
          }}
          style={styles.inputs}
          type={"text"}
          placeholder={"enter your name..."}
        ></input>
        <br />
        {/* EMAIL INPUT */}
        <input
          // onFocus={() => handleFocusChange("Focus")}
          onBlur={(e) => {
            const email = e.target.value;
            validateEmail(email);
          }}
          style={styles.inputs}
          type={"email"}
          placeholder={"enter your email..."}
        ></input>
        <br />
        {/* MESSAGE INPUT */}
        <textarea
          // onFocus={() => handleFocusChange("Focus")}
          onBlur={(e) => {
            const message = e.target.value;
            validateMessage(message);
          }}
          type={"text"}
          style={styles.inputs}
          placeholder={"enter your message..."}
        ></textarea>
        <br />
        <input
          onClick={submit()}
          value="SUBMIT"
          type={"button"}
          style={styles.submit}
        ></input>
      </form>
      <p style={styles.p}>
        alternatively, contact me via:
        <br />
        <strong>sabhanson7@gmail.com</strong> or
        <strong> 360-619-2530</strong>
      </p>
    </div>
  );
}
