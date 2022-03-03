import React from "react";
import "./App.css";
import Project from "./components/Project";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navigation />
      <Project />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
