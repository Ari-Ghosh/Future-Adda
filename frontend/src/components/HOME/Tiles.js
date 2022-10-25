import React from "react";
import "./Tiles.css"
import P1 from "./images/Des.jpg"
import P2 from "./images/Dev.jpg"
import P3 from "./images/Mark.jpg"
import P4 from "./images/IT.jpg"
import P5 from "./images/Pd.jpg"
import P6 from "./images/Entre.jpg"
import P7 from "./images/Photog.jpg"
import P8 from "./images/music.jpg"

export default function Tiles()
{
    return(
        <div class="skills" id="skills">
            <h1 class="cardHeading">Skills</h1>
            <img
            class="html5"
            title="Design"
            src={P1}
            alt="Design Logo"
            />
            <img class="html5" title="Development" src={P2} alt="Development Logo" />
            <img
            class="html5"
            title="Marketing"
            src={P3}
            alt="Marketing Logo"
            />
            <img
            class="html5"
            title="IT & Software"
            src={P4}
            alt="IT Logo"
            />
            <img
            class="html5"
            title="Personal Development"
            src={P5}
            alt="Personal Devlopment Logo"
            />
            <img
            class="html5"
            title="Business"
            src={P6}
            alt="Business Logo"
            />

            <img
            class="html5"
            title="Photography"
            src={P7}
            alt="Photography Logo"
            />

            <img
            class="html5"
            title="Music"
            src={P8}
            alt="Music Logo"
            />  


      </div>
    )
}