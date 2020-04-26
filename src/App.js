import React from 'react';
import logo from './sw2.svg';
import './App.css';
import Navbar from "./Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        <Navbar />
        <i className="fas fa-laptop-code anim-logo" style={{ color: "grey", "font-size": "30px"}}></i>
        <img src={logo} className="App-logo" alt="logo" />
        
        <i className="fas fa-meteor app-logo-2" style={{ color: "grey", "font-size": "20px"}}></i>
        <button className="btn"> View My works</button>
        <i className="fas fa-laptop-code anim-logo" style={{ color: "grey", "font-size": "30px"}}></i>

    
      </header>
      <About />
      <Skills/>
    </div>
  );
}

export default App;
