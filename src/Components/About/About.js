import React from "react";
import "./about.scss";
import logo from "../../sw.svg"

function About() {
  return (
    <> 
    <div className="about">
    <div className="container">
      <h2 className="center">About Me </h2>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="center">
        I am SHAMSEENA KARUMAROT (Shamz), A passionate Web/Front-End Developer
        currently residing in Berlin,Germany.
      </p>

      <p>
        I am a B.Tech Computer Science & Engineering graduate with 'First class
        with Honors'.I have 2+ years of experience as Systems Engineer at Tata
        Consultancy Services, where I handled Level2 Tech Support of SAP
        Enterprise Portal ,EMEA. I have work experience in UX/UI Manual Testing
        and WordPress Content Management as well. 
      </p>

      <p>
        My love and passion for Web Development made me dive into
        this amazing field .
      </p>
      </div>
      </div>
    </>
  );
}

export default About;
