import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const styles = {
  div: {
    paddingBottom: '3rem',
    paddingTop: '1rem'
    // height: '500px'
  },
  h1: {
    fontSize: '3rem'
  },
  img: {
    borderRadius: '50%'
  }
}
// this page is loaded by default 
    // includes a headshot, name, and bio

export default function About() {
  return (
    <div style={styles.div}>
      <h1 style={styles.h1}>About Me</h1>
      <p>
        this is a paragraph about me, sabhanson
      </p>
      <img style={styles.img} width={'50%'} alt='pic of me' src='./joe-dirt.jpeg'/>
    </div>
  )
}
