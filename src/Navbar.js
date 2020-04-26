import React from 'react';
import './navbar.scss';

function Navbar(){
    return(
    <nav className="nav-wrapper transparent darken-3 navbar">
        <div classname="container">
            <a href="/" className ="brand-logo"></a>
            <ul className="right">
                <li><a href="/about">About Me</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;