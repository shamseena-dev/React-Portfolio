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
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn"> View My works</button>
        

    
      </header>
      <About />
      <Skills/>
    </div>
  );
}

export default App;
