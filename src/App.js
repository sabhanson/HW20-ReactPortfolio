import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const styles = {
  app: {
    background: "#84A98C",
    height: "100vh",
  },
};
// when the app is initially opened, a user will see the main/default page (about me)
// they will see the navbar with:
//SABRINA HANSON-----ABOUT ME | PORTFOLIO | CONTACT | RESUME
// they will see the about me section displayed in the main area
// I AM SABRINA...pic of me...info about me
// they will see the footer
// LINK TO GITHUB | LINK TO LINKEDIN

function App() {
  return (
    <div className="App" style={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
