import React from 'react';
import { Link } from "react-router-dom";
import "./contact.scss";
function Contact(){
   return(
       <>
       <div className="social-icons" id="contact">
       <div className="container">
       <h4>Contact</h4>
       <h6>Feel free to check my works /connect with me </h6>
       <div className="inside">
       <Link to="https://www.linkedin.com/in/shamseena-karumarot-26431089/"><i class="fab fa-linkedin social-media-icons" aria-hidden="true"></i></Link>
       

<a href="https://github.com/shamseena-dev"><i className="fab fa-github social-media-icons" aria-hidden="true"></i></a>
<a href="mailto:shamseenakarumarot@gmail.com"><i class="fas fa-envelope social-media-icons"></i></a>
<Link to="https://gitlab.com/Shamz-dev">
       <i class="fab fa-gitlab social-media-icons"></i></Link>


	 	</div>
         </div>		
       </div>
       </>
   )
}
export default Contact;
