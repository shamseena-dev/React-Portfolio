import React,{ useState}from 'react';
import './navbar.scss';

function Navbar(){
    const [toggle,setToggle] = useState(false);
    const [hidenav,setHidenav] = useState(false)
    
    const Toggle = () => {
        setToggle(!toggle)
        setHidenav(!hidenav)
    }
    return(
        
    <nav className="darken-3 navbar">
               <i className={toggle ? "fa fa-bars hide-on-med-and-up left menu-icon" : "fa fa-times hide-on-med-and-up left menu-icon" }aria-hidden="true" onClick={Toggle}></i>
                    
                <ul className={hidenav ? "hidenav":"none"}>
                <li><a href="/"><i className="fas fa-home "></i></a></li>
                <li><a href="#about"> About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li><li><a href="#contact">Contact</a></li>
            </ul>
    
    </nav>
    )
}

export default Navbar;