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
    
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <h4> Hi there, I'm a React/Javascript Front End Developer...</h4><br></br>
        <button className="btn"> View My works</button>
        {/*<i className="fas fa-laptop-code anim-logo" style={{ color: "orange", "font-size": "35px"}}></i>*/}

    
      </header>

      <About />
      <Skills/>
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
