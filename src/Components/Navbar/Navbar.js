import React,{ useState}from 'react';
import './navbar.scss';

function Navbar(){
    const [toggle,setToggle] = useState(false)
    
    const Toggle = () => {
        setToggle(!toggle)
    }
    return(
    <nav className="darken-3 navbar">
               <i className={toggle ? "fa fa-bars hide-on-med-and-up left" : "fa fa-window-close hide-on-med-and-up left" }aria-hidden="true" onClick={Toggle}></i>
                    
                <ul>
                <li><a href="/"><i className="fas fa-home "></i></a></li>
                <li><a href="/about"> About</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li><li><a href="/Contact">Contact</a></li>
            </ul>
    
    </nav>
    )
}

export default Navbar;