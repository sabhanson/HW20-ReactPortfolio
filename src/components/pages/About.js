import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";



// TODO: change fonts
const styles = {
  div: {
    paddingBottom: '3rem',
    paddingTop: '2rem',
    // height: '500px'
  },
  h1: {
    fontSize: '3rem'
  },
  p: {
    padding: '2rem'
  },
  img: {
    borderRadius: '50%'
  }
}
    
    export default function About() {
      return (
        <div style={styles.div}>
      <h1 style={styles.h1}>About Me</h1>
       {/* TODO: write about me paragraph */}
      <p style={styles.p}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non finibus erat. Curabitur convallis egestas turpis sed sagittis. Aliquam lacus libero, pharetra vitae arcu vel, ullamcorper aliquet elit. Aenean lobortis purus id egestas maximus. Vestibulum sit amet congue sem. Maecenas pretium scelerisque elit, at pharetra mi blandit in. Donec vestibulum erat sed pretium blandit. Aliquam tempus quis odio id ultricies. Fusce pharetra sollicitudin cursus. Integer fermentum eros a dui commodo tristique. Quisque a risus eu odio hendrerit malesuada vel eget ante. Duis finibus suscipit dolor, nec viverra leo cursus vel.
      </p>
      {/* TODO: take a better headshot */}
      <img style={styles.img} width={'50%'} alt='pic of me' src='./joe-dirt.jpeg'/>
    </div>
  )
}
