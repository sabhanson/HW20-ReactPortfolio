import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/Contact.css";

const styles = {
  div: {
    padding: "2rem 0 3rem 0",
    // height: '100%'
  },
  h1: {
    fontSize: "3rem",
    fontFamily: 'Unica One, cursive',
    color: '#F4E285',
    textShadow: '2px 2px black'
  },
  inputs: {
    width: "50%",
    background: "#F4E285",
    border: "3px solid #FFA500",
    borderRadius: "8px",
    resize: "none",
    fontFamily: 'Syne, sans-serif',
    margin: ".2rem",
    color: 'black'
  },
  submit: {
    background: "#F4E285",
    borderRadius: '10px',
    border: "2px solid black",
    fontFamily: 'Unica One, cursive',
    color: 'black',
    fontWeight: 'bold'
  },
  p: {
    fontFamily: "Syne, sans-serif"
  }
};

// this page is loaded when CONTACT is selected from the navbar
// includes a form with fields for NAME, EMAIL, and MESSAGE
// when the form is unfocused, the validations are run to check if things were filled out properly
// validates that name is filled out
// validates that email is proper format
// validates that a message is entered

export default function Contact() {
  const [focus, setFocus] = useState("Unfocus");

  const handleFocusChange = (hover) => setFocus(hover);

  // onBlur for name input

// need to run a function to validate a name input
  // must be between 1-40 characters
  // if null, alert "you must enter a name"
  // if valid, allow for form submission

// need to run a function to validate an email onBlur
  // regex pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  // if null, alert "you must enter an email"
  // if invalid, alert "you must enter an email in the proper format"
  // if valid, allow for form submission

// need to run a function to validate the message input
  // must be between 10 and 500 characters
  // if null, alert "you must enter a message"
  // if valid, allow for form submission



  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>CONTACT ME</h1>
      <form>
        {/* NAME INPUT */}
        {/* onFocus (when interacting) set the focus state to focus, onBlur (when not interacting) run the validation to check if the name is in the correct format */}
        <input
          onFocus={() => handleFocusChange("Focus")}
          onBlur={() => handleFocusChange("Unfocus")}
          className={focus === "Unfocus" ? "unfocus" : "focus"}
          style={styles.inputs}
          type={"text"}
          placeholder={"enter your name..."}
        ></input>
        <br />
        {/* EMAIL INPUT */}
        <input
          onFocus={() => handleFocusChange("Focus")}
          onBlur={() => handleFocusChange("Unfocus")}
          className={focus === "Unfocus" ? "unfocus" : "focus"}
          style={styles.inputs}
          type={"email"}
          placeholder={"enter your email..."}
        ></input>
        <br />
        {/* MESSAGE INPUT */}
        <textarea
          onFocus={() => handleFocusChange("Focus")}
          onBlur={() => handleFocusChange("Unfocus")}
          className={focus === "Unfocus" ? "unfocus" : "focus"}
          type={"text"}
          style={styles.inputs}
          placeholder={"enter your message..."}
        ></textarea>
        <br />
        <input value="SUBMIT" type={"submit"} style={styles.submit}></input>
      </form>
      <p style={styles.p}>email: sabhanson7@gmail.com</p>
      <p style={styles.p}>cell: 360-619-2530</p>
    </div>
  );
}

// onFocus


// TODO: make submit button look cuter
// TODO: validation for name
// TODO: validation for email
// TODO: validation for message
