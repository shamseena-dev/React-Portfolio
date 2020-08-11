import React from 'react';
import logo from './1.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Recognitions from "./Components/Recognitions/Recognitions";

function App() {
  return (
    <div className="App">
    <div className="app-home">
      <Navbar />
      <header className="App-header">
        
        <img src={logo} className="banner-pic" alt="banner pic" />
        <h5 className="caption"> I am a React Front End Developer ...</h5><br></br>
        <button className="btn view-button"><a href="#projects"> View My works</a></button>
        {/*<i className="fas fa-laptop-code anim-logo" style={{ color: "orange", "font-size": "35px"}}></i>*/}

    
      </header>
     </div>
      <About />
      <Skills/>
      <Projects/>
     
      <Recognitions />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
