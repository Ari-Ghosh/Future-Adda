import React from "react";
import instructor from './images/instructor-1x-v3.jpg'
import "./Inst.css";



export default function Inst()
{
    return (
        <div className="env">
            <img className="InsPic" src={instructor} alt="instructor"/>
            <div className="WriteUp">
                <h2>Become an Instructor</h2>
                <div className="para">
                    <p><b>Instructors from around the world teach millions of students on Udemy. We provide the tools and skills to teach what you love.</b></p>
                    <button className="btn-primary-inst" >Start Teaching Today</button> 
                </div>
            </div>
        </div>
    )
}

