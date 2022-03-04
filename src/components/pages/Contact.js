import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../styles/Contact.css'

const styles = {
  div: {
    padding: "2rem 0 3rem 0",
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

  return (
    <div style={styles.div}>
      <h1>Contact Me!</h1>
      <form>
        {/* NAME INPUT */}
        {/* onFocus (when interacting) set the focus state to focus, onBlur (when not interacting) run the validation to check if the name is in the correct format */}
        <input
          onFocus={() => handleFocusChange("Focus")}
          onBlur={() => handleFocusChange("Unfocus") }
          
          className={focus === "Unfocus" ? "unfocus" : "focus"}
          type={"text"}
          placeholder={"enter your name..."}
        ></input>
        <br />
        {/* <label>Your Email</label> */}
        <input type={"text"} placeholder={"enter your email..."}></input>
        <br />
        {/* <label>Your Message</label> */}
        <textarea
          type={"text"}
          placeholder={"enter your message..."}
        ></textarea>
        <br />
        <input type={"submit"}></input>
      </form>
    </div>
  );
}

// onFocus
