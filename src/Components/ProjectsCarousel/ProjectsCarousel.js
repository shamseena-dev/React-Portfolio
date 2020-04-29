import React from 'react';
import Coverflow from 'react-coverflow';

import w2 from "../../images/newslive.jpg";
import w3 from "../../images/shopping_list.jpg";
import w4 from "../../images/portfolio_pjt.jpg";

function ProjectsCarousel(){
    return(
<Coverflow

width={90}

height={100}

displayQuantityOfSide={1}

navigation={false}

enableHeading={false}

>

<div

    role="menuitem"

  tabIndex="0"

>

  <img

    src={w2}

    alt='title or description'

    style={{"width":"80px","height":"50px"}}/>

  />

</div>

<img src={w2} alt='title or description' data-action="#" style={{"width":"80px","height":"50px"}}/>
<img src={w3} alt='title or description' data-action="#" style={{"width":"80px","height":"50px"}}/>
<img src={w4} alt='title or description' data-action="#" style={{"width":"80px","height":"50px"}}/>


</Coverflow>
    )
}

    export default ProjectsCarousel;