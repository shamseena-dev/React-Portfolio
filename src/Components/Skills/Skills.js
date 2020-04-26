import React from "react";
import "./skills.scss";

function Skills() {
  return (
    <>
      <h2>Skills </h2>
      <div className="container skill-icons">
        <i
          className="fab fa-react"
          style={{ color: "blue", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-sass"
          style={{ color: "purple", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-js"
          style={{ color: "yellow", "font-size": "80px" }}
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
          style={{ color: "black", "font-size": "80px" }}
        ></i>
        <i className="fab fa-npm" style={{ color: "red", "font-size": "80px" }}></i>
        <i
          className="fab fa-yarn"
          style={{ color: "blue", "font-size": "80px" }}
        ></i>
        <i
          className="fab fa-bootstrap"
          style={{ color: "blue", "font-size": "80px" }}
        ></i>
        
      </div>
    </>
  );
}
export default Skills;
