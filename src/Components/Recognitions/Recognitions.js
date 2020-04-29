import React from 'react';
import Coverflow from 'react-coverflow';


import w4 from "../../images/recognitions/corona-help.JPG";
import w5 from "../../images/recognitions/Hackathon-education.JPG";
import w6 from "../../images/recognitions/Hackathon-SCT.JPG";
import w7 from "../../images/recognitions/N3XTCODER-post.JPG";
import w8 from "../../images/recognitions/N3XTCODER.JPG";

function Recognitions(){
    return(
<Coverflow

width={960}

height={480}

displayQuantityOfSide={1}

navigation={false}

enableHeading={false}

>

<div

    role="menuitem"

  tabIndex="0"

>

  <img

    src={w4}

    alt='title or description'

    style={{ display: 'block', width: '100%' }}

  />

</div>
<img src={w8} alt='title or description' data-action="#" style={{"width":"500px","height":"auto"}}/>
<img src={w5} alt='title or description' data-action="#" style={{"width":"500px","height":"auto"}}/>
<img src={w6} alt='title or description' data-action="#" style={{"width":"500px","height":"auto"}}/>



</Coverflow>
    )
}

    export default Recognitions;