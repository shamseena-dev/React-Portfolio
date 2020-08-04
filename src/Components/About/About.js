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
      <p className="center about-notes">
         I am Shamseena Karumarot (Shamz), a passionate Web/Front-End/software Developer. I love building aesthetically pleasing and amazing User experiences.
       </p>
    
        <p>Currently I am working as Front End Developer & Lead Engineer at PurpleConnect , an AI powered startup in Healthcare .
  I have built a few personal web apps and have volunteered for corona-help.org as Frontend Developer.
I love to take part in hackathons ,to mentor and assist social ventures and N.G.O's in my extra time. </p>
 <p>

    Talking a bit about my background, I graduated in Computer Science & Engineering (B.Tech) and grabbed my first job offer through campus placement in one of the reputed MNCs  -Tata Consultancy Services.  
        I worked for 2+ years as Systems Engineer at T.C.S(Bangalore) ,handling Level-2 tech support for SAP ERP, EMEA region.  I have project experience in UX/UI Manual Testing
        for a start up and WordPress Content Management for an N.G.O as well.
        </p>
 
        
     
      </div>
      </div>
    </>
  );
}

export default About;
