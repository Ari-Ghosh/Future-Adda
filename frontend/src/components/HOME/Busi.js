import React from "react";
import business from "./images/FAbusi.jpg";
import lady from "./images/ubusi.jpg";
import "./Busi.css";


export default function Busi()
{
    return(
        <div className="BusiCont">
            
            <div className="WriteUp2">
                <img src={business} className="Lab" alt="business"/>
                <div className="para2">
                    <p>Get unlimited access to 17,000+ of Future Adda's top courses for your team. Learn and improve skills across business, tech, design, and more.</p>
                    <button className="btn-busi" >Get FA Business</button> 
                </div>
            </div>
            
            <img className="Busipic" src={lady} alt="lady" />
            
        </div>
    )
}
