import React from 'react';

import "./contact.scss";
function Contact(){
   return(
       <>
       <div className="social-icons" id="contact">
       <div className="container">
       <h4>Contact</h4>
       <h6>Feel free to check my works /connect with me </h6>
       <div className="inside">
       <a href="https://www.linkedin.com/in/shamseena-karumarot-26431089/"><i className="fab fa-linkedin social-media-icons" ></i></a>
       

<a href="https://github.com/shamseena-dev"><i className="fab fa-github social-media-icons" ><span> </span></i></a>
<a href="mailto:shamseenakarumarot@gmail.com"><i className="fas fa-envelope social-media-icons"></i></a>
<a href="https://gitlab.com/Shamz-dev">
       <i className="fab fa-gitlab social-media-icons"></i></a>


	 	</div>
         </div>		
       </div>
       </>
   )
}
export default Contact;
