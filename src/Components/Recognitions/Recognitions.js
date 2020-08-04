import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import w3 from "../../images/recognitions/codebar-final.JPG";
import w2 from "../../images/recognitions/Edited-circulor.jpg";
import w4 from "../../images/recognitions/Edited-coronahelp.jpg";
import w5 from "../../images/recognitions/Hackathon-education.JPG";
import w6 from "../../images/recognitions/Hackathon-SCT.JPG";
import w7 from "../../images/recognitions/hacktoberfest2019.jpg";
import gh from "../../images/recognitions/arctic_github.JPG";
import cert from "../../images/recognitions/cert.jpg";

import w8 from "../../images/recognitions/N3XTCODER.JPG";
import "./recognitions.scss";
import Intpurple from "../../images/companies/intpurple.JPG";
import TCS from "../../images/companies/TATA.JPG";
import SAP from "../../images/companies/SAP.JPG";
import MC360 from "../../images/companies/MC360.JPG";
import CoronaHelp from "../../images/companies/corona-help.JPG";
import N3XTCODER from "../../images/companies/N3XTCODER.JPG";
import RacketMind from "../../images/companies/RacketMind.JPG";
import Codebar from "../../images/companies/codebar.JPG";
import KeralaRescue from "../../images/companies/keralaRescue.JPG";
import HWA from "../../images/companies/HWA.JPG";
import Circulor from "../../images/companies/circulor.JPG";


 
class Recognitions extends Component {
    render() {
        return (
            <>
            <div className="recognitions" id="recognitions"> 
            <div className="container">
                <h4>Recognitions & Hackathons</h4>
                <Carousel>
                <div className="div1" >
                    <img src={w8} alt="Featured in blog" />
                    <p className="legend">FEATURED IN N3XTCODER BLOG,Courtesy:N3XTCODER</p>
                </div>
                <div className="div2" >
                    <img src={w4} alt="corona-help:Frontend artist" />
                    <p className="legend">CORONA-HELP.ORG, FRONT END ARTIST</p>
                </div>
                 <div className="div8" >
                    <img src={cert} alt="webdev certificate"  />
                    <p className="legend">Web Developer Certification,Udemy</p>
                </div>
                 <div className="div9" >
                    <img src={gh} alt="Arctic code vault"  />
                    <p className="legend">Arctic Code Vault Contributor</p>
                </div>
                <div className="div3" >
                    <img src={w2} alt="hackathon team"  />
                    <p className="legend">Circulor Team, Courtesy:N3XTCODER</p>
                </div>
                <div className="div4" >
                    <img src={w3} alt="codebar coach" />
                    <p className="legend">CODEBAR COACH/MENTOR</p>
                </div>
                
                <div className="div5" >
                    <img src={w5} alt="hackathon 2" />
                    <p className="legend">HACKATHON-Future of Education ,Courtesy:N3XTCODER</p>
                </div>
                <div className="div6" >
                    <img src={w6} alt="Hackathon"  />
                    <p className="legend">HACKATHON-Supply Chain Transparency ,Courtesy:N3XTCODER</p>
                </div>
                 <div className="div7" >
                    <img src={w7} alt="Hacktoberfest"  />
                    <p className="legend">HACKTOBERFEST 2019 </p>
                </div>
                
                
            </Carousel>
            </div>
            </div>
            <div className="container companies-div">
            <h4 className="companies-heading">Companies/Clients Worked For</h4>
        <div className="companies">
        <img src={Intpurple} alt="Intpurple"/>
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
            </>
        );
    }
}
export default Recognitions;
