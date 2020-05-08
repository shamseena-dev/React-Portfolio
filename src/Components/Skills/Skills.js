import React from "react";
import "./skills.scss";
import Webpack from "../../images/logos/Webpack.JPG";
import ReactRouter from "../../images/logos/ReactRouter.JPG";
import SublimeText from "../../images/logos/SublimeText_logo.jpg";
import VisualStudio from "../../images/logos/VisualStudio.JPG";
import Redux from "../../images/logos/Redux.JPG";
import Bootstrap from "../../images/logos/Bootstrap.JPG";
import Materialize from "../../images/logos/Materialize.JPG";
import postgresql from "../../images/logos/postgresql.JPG";
import mongodb from "../../images/logos/mongodb.JPG";
import express from "../../images/logos/express.JPG";
import postman from "../../images/logos/postman.JPG";
import restapi from "../../images/logos/restapi.JPG";
function Skills() {
  return (
    <>
    <div className="skills-section" id="skills">
      <div className="container">
      
      <h4>Skills </h4>
      <div className="skill-icons">
        <i
          className="fab fa-react"
          style={{ color: "#6666ff", "font-size": "80px" }}
        ></i>
        <img src={Redux} style={{ "height":"70px","width":"auto"}} />
        <img src={ReactRouter} style={{ "height":"70px","width":"auto"}} />
        <i
          className="fab fa-js"
          style={{ "color": "yellow","background-color":"black", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-sass"
          style={{ color: "purple", "font-size": "80px" }}
        ></i>
        
        <i
          className="fab fa-css3-alt"
          style={{ color: "blue", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-html5"
          style={{ color: "red", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-node"
          style={{ color: "green", "font-size": "80px" }}
        ></i>
        <i
          class="fab fa-git"
          style={{ color: "black", "font-size": "60px" }}
        ></i>
        <i className="fab fa-npm" style={{ color: "red", "font-size": "80px" }}></i>
        
        
        <i
          className="fab fa-bootstrap fa-2x"
          style={{ color: "blue", "font-size": "80px" }}
        ></i>
        <img src={restapi} style={{ "height":"80px","width":"auto"}} />
        <img src={postgresql} style={{ "height":"80px","width":"auto"}} />
        <img src={mongodb} style={{ "height":"80px","width":"auto"}} />
        <img src={express} style={{ "height":"50px","width":"auto"}} />
        <img src={postman} style={{ "height":"70px","width":"auto"}} />

        <img src={Webpack} style={{ "height":"70px","width":"auto"}} />
               
        <img src={Bootstrap} style={{ "height":"70px","width":"auto"}} />
        <img src={Materialize} style={{ "height":"70px","width":"auto"}} />
        <img src={SublimeText} style={{ "height":"70px","width":"auto"}} />
        <img src={VisualStudio} style={{ "height":"70px","width":"auto"}} />
        <i
          className="fab fa-yarn"
          style={{ "color": "#6666ff", "font-size": "80px", }}
        ></i>
        
        
      </div>
      </div>
      </div>
    </>
  );
}
export default Skills;
