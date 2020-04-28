import React from 'react';
import logo from './1.svg';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <div className="app-home">
      <Navbar />
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <h5 className="caption"> Hi there, I'm a React/Javascript Front End Developer...</h5><br></br>
        <button className="btn view-button"> View My works</button>
        {/*<i className="fas fa-laptop-code anim-logo" style={{ color: "orange", "font-size": "35px"}}></i>*/}

    
      </header>
     </div>
      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
