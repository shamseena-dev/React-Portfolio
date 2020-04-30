import React from "react";
import "./about.scss";
import logo from "../../sw.svg"
import TCS from "../../images/companies/tcs.JPG";
import SAP from "../../images/companies/SAP.JPG";
import MC360 from "../../images/companies/MC360.JPG";
import CoronaHelp from "../../images/companies/corona-help.JPG";
import N3XTCODER from "../../images/companies/N3XTCODER.JPG";
import RacketMind from "../../images/companies/RacketMind.JPG";
import Codebar from "../../images/companies/codebar.JPG";
import KeralaRescue from "../../images/companies/keralaRescue.JPG";
import HWA from "../../images/companies/HWA.JPG";
import Circulor from "../../images/companies/circulor.JPG";

function About() {
  return (
    <> 
    <div className="about-section" id="about">
    <div className="container">
      <h4 className="center">About Me </h4>
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
      <h4 className="companies-heading">Companies/Clients Worked For:</h4>
      <div className="companies">
        <img src={TCS} alt="TCS"/>
        <img src={SAP} alt="SAP"/>
        <img src={MC360} alt="MyCareer360"/>
        <img src={CoronaHelp} alt="Corona-help.org"/>
        <img src={Codebar} alt="codebar"/>
        <img src={KeralaRescue} alt="KeralaRescue"/>
        <img src={N3XTCODER} alt="N3XTCODER"/>
        <img src={RacketMind} alt="RACKETMIND"/>
        <img src={Circulor} alt="CIRCULOR"/>
        <img src={HWA} alt="HWA"/>
      </div>
      </div>
      </div>
    </>
  );
}

export default About;
