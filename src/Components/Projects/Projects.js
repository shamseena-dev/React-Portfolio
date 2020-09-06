import React from "react";
import shopping_list from "../../images/shopping_list.jpg";
import newslive from "../../images/newslive.jpg";
import portfolio_js from "../../images/portfolio_pjt.jpg";
import portfolio_react from "../../images/Portfolio_react.JPG";
import face_detection from "../../images/face_detect.JPG";
import project_tracker from "../../images/project_tracker.jpg";
import news from "../../images/newslocal.JPG";
import "./projects.scss";

function Projects() {
  return (
    <>
      <div className="projects-section" id="projects">
        <div className="container">
          <h4 className="center"> Projects</h4>
          <div className="projects-container">
           <div className="card container project-card">
            <img src={news} alt="Local News" />
            <h5>Local News & Weather  - (SPA React)</h5>
            <p> React, React Router, Rest API(GNews,openweatherAPI), SASS/SCSS, NPM </p>
            <button className="btn demos-btn">
              <a href="https://localnews.netlify.app/">Demo</a>
            </button>

            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/news">
                GitHub
              </a>
            </button>
          </div>
          <div className="card container project-card">
            <img src={newslive} alt="News_App_img" />
            <h5>NewsLive - (SPA React)</h5>
            <p> React, React Router, Rest API, SASS/SCSS, NPM </p>
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
            <img src={face_detection} alt="Face detection app" />
            <h5>Face Detection App - (MERN Stack + API)</h5>
            <p> React, Clarifai API,JWT, Express, MongoDB, Node.js, SCSS, Materialize CSS </p>
            <button className="btn demos-btn">
              <a href="https://face-detection-reactapp.herokuapp.com/">Demo</a>
            </button>

            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/face-detection-app">GitHub</a>
            </button>
          </div>
          <div className="card container project-card">
            <img src={portfolio_react} alt="Portfolio img" />
            <h5>Portfolio - (React)</h5>
            <p> React, React Hooks, Materialize CSS, SASS/SCSS ,NPM </p>
            <button className="btn demos-btn">
              <a href="https://shamseena-portfolio.netlify.app/">Demo</a>
            </button>

            <button className="btn demos-btn">
              <a href="https://github.com/shamseena-dev/React-Portfolio">GitHub</a>
            </button>
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
          <div className="card container project-card">
            <img src={project_tracker} alt="Projects Tracker" />
            <h5>Projects Tracker</h5>
            <p> React ,Hooks ,Context ,SASS/SCSS , NPM </p>
            <p> Work in progress..</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
