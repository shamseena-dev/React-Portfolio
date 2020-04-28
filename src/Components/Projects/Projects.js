import React from "react";
import shopping_list from "../../images/shopping_list.jpg";
import newslive from "../../images/newslive.jpg";
import portfolio_js from "../../images/portfolio_pjt.jpg";
import portfolio_react from "../../images/Portfolio_react.JPG";
import "./projects.scss";

function Projects() {
  return (
    <>
      <div className="projects-section" id="projects">
        <div className="container">
          <h4 className="center"> Projects</h4>
          <div className="projects-container">
          <div className="card container project-card">
            <img src={newslive} alt="News_App_img" />
            <h5>NewsLive - (SPA React)</h5>
            <p> React, React Router, Rest API, NPM, SASS/SCSS, NPM </p>
            <button className="btn demos-btn">
              <a href="https://newsliveapp.netlify.com">Demo</a>
            </button>

            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/News-ReactApp">
                GitHub
              </a>
            </button>
          </div>

          <div className="card container project-card">
            <img src={portfolio_react} alt="Portfolio img" />
            <h5>Portfolio - (React)</h5>
            <p> React, Materialize CSS, SASS/SCSS ,NPM </p>
          </div>
          <div className="card container project-card">
            <img src="" alt="Projects Tracker" />
            <h5>Projects Tracker</h5>
            <p> React ,Hooks ,Context ,SASS/SCSS , NPM </p>
            <p> Work in progress..</p>
          </div>
          <div className="card container project-card">
            <img src={portfolio_js} alt="Portfolio" />
            <h5>Portfolio -(Javascript)</h5>
            <p> Javascript, Particles.js, Webpack, NPM, HTML5, CSS3 </p>
            <button className="btn demos-btn">
              <a href="https://shamseena.netlify.app/">Demo</a>
            </button>

            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/My-Portfolio">GitHub</a>
            </button>
          </div>
          <div className="card container project-card">
            <img src={shopping_list} alt="Shopping List App" />
            <h5>Shopping List Managing App</h5>
            <p> Javascript, Bootstrap, HTML5, CSS3 </p>
            <button className="btn demos-btn">
              <a href="https://shamseena-dev.github.io/shopping-list-manager-app/">
                Demo
              </a>
            </button>
            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/shopping-list-manager-app">
                GitHub
              </a>
            </button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
