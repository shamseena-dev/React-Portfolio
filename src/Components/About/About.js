import React from "react";
import "./about.scss";
import aboutBanner from "../../sw.svg"

function About() {
  return (
    <> 
    <div className="about-section" id="about">
    <div className="container">
      <h4 className="center">About Me </h4>
      <img src={aboutBanner} className="about-banner" alt="About_banner pic" />
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
