import React from "react";
import "./Transform.css";
import ladder from "./images/tran.jpg"
export default function Transform()
{
    return(
        <div className="env">
            <img className="InsPic" src={ladder} alt="ladder"/>
            <div className="WriteUp">
                <h2>Transform your life through education</h2>
                <div className="para">
                    <p>Learners around the world are launching new careers, advancing in their fields, and enriching their lives.</p>
                    <button className="btn-primary" ><b>Find out how</b></button> 
                </div>
            </div>
        </div>
    )
}
