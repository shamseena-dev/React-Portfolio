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
         I am Shamseena Karumarot (Shamz), a highly passionate Web/Front-End/software Developer. I love building aesthetically pleasing and amazing websites.
       </p>
   <p>
    Talking a bit about my background, I graduated in Computer Science & Engineering (B.Tech) and grabbed my first job offer in hand while still in 6th semester. It was a dream come true as I joined Tata Consultancy Services within 2 weeks of completion my college days.  
        I worked for 2+ years as Systems Engineer at T.C.S(Bangalore) where I handled Level 2 tech support for SAP ERP, EMEA region.  After this, I got a couple of project experience in UX/UI Manual Testing
        for a start up and WordPress Content Management for an N.G.O .
        </p>
  <p>
        I have always been passionate to dive into the Development field. I have been learning Web development from various sources for a while and recently got graduated in Web Development from ZTM academy . I have built a couple of personal projects .I could also work for corona-help.org as Frontend Developer.
I love taking part in hackathons ,love to mentor and to assist social ventures and N.G.Os.         
</p>
     
      </p>
      </div>
      </div>
    </>
  );
}

export default About;
