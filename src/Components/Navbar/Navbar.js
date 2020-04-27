import React from 'react';
import './navbar.scss';

function Navbar(){
    return(
    <nav className="transparent darken-3 navbar">
        <div classname="container">
            <a href="/" className ="brand-logo"></a>
            <ul className="left nav-ul">
                <li><a href="/">Home<i class="fas fa-home"></i></a></li>
                <li><a href="/about">About <i class="fas fa-user-tag"></i></a></li>
                <li><a href="/skills">Skills<i class="fas fa-tags"></i></a></li>
                <li><a href="/projects">Projects<i class="fas fa-tasks"></i></a></li><li><a href="/Contact">Contact<i class="fas fa-address-book"></i></a></li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;