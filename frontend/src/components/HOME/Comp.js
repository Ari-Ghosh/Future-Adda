import React from "react";
import "./Comp.css";
import p1 from "./images/nasdaq-dark.svg";
import p2 from "./images/volkswagen-dark.svg";
import p3 from "./images/box-dark.svg"
import p4 from "./images/netapp-dark.svg"
import p5 from "./images/eventbrite-dark.svg"
import p6 from "./images/tcs-dark.svg"


export default function Comp()
{
    return(
        <div className="CompCont">
            <h3>Trusted by the best</h3>
            <p>Leading companies use the same courses to help employees keep their skills fresh.</p>
            <ul className="CompIcons">
                <li><img src={p1} alt="p1"/></li>
                <li><img src={p2} alt="p2"/></li>
                <li><img src={p3} alt="p3"/></li>
                <li><img src={p4} alt="p4"/></li>
                <li><img src={p5} alt="p5"/></li>
                <li><img src={p6} alt="p6"/></li>
            </ul>
        </div>
    )
}    