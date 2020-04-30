import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import w3 from "../../images/recognitions/codebar-final.JPG";
import w2 from "../../images/recognitions/Edited-circulor.jpg";
import w4 from "../../images/recognitions/Edited-coronahelp.jpg";
import w5 from "../../images/recognitions/Hackathon-education.JPG";
import w6 from "../../images/recognitions/Hackathon-SCT.JPG";

import w8 from "../../images/recognitions/N3XTCODER.JPG";

 
class Recognitions extends Component {
    render() {
        return (
            <Carousel>
                <div style={{"width":"700px","height":"auto","margin":"auto"}}>
                    <img src={w8}  />
                    <p className="legend">FEATURED IN BLOG,Courtesy:N3XTCODER</p>
                </div>
                <div style={{"width":"550px","height":"100%","margin":"auto"}}>
                    <img src={w4} />
                    <p className="legend">CORONA-HELP.ORG, FRONT END ARTIST</p>
                </div>
                <div style={{"width":"300px","height":"100%","margin":"auto"}}>
                    <img src={w2}  />
                    <p className="legend">HACKATHON, Courtesy:N3XTCODER</p>
                </div>
                <div style={{"width":"500px","height":"100%","margin":"auto"}}>
                    <img src={w3} />
                    <p className="legend">CODEBAR COACH/MENTOR</p>
                </div>
                
                <div style={{"width":"500px","height":"auto","margin":"auto"}}>
                    <img src={w5}  />
                    <p className="legend">HACKATHON ,Courtesy:N3XTCODER</p>
                </div>
                <div style={{"width":"500px","height":"auto","margin":"auto"}}>
                    <img src={w6}  />
                    <p className="legend">HACKATHON ,Courtesy:N3XTCODER</p>
                </div>
                
                
            </Carousel>
        );
    }
}
export default Recognitions;
