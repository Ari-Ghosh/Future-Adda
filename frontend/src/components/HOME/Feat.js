import React from "react";
import "./Feat.css";


export default function Feat() {
    return (
        <div>
            <div className="big-guy">
                <h3 id="abc">Featured topics by category</h3>
                <br />
                <div className="container_feat">
                    <ul className="list1">
                        <li><h4>Development</h4></li>
                        <li className="list-items"><a href="#">Python</a><br /><small>94,56,311 students</small></li>
                        <li className="list-items"><a href="#">Web Development</a><br /><small>8,24,56,311 students</small></li>
                        <li className="list-items"><a href="#">Machine Learning</a><br /><small>14,56,311 students</small></li>
                    </ul>
                    <ul className="list2">
                        <li><h4>Business</h4></li>
                        <l1 className="list-items"><a href="#">Financial Analysis</a><br /><small>8,24,56,311 students</small></l1>
                        <li className="list-items"><a href="#">SQL</a><br /><small>8,24,56,311 students</small></li>
                        <li className="list-items"><a href="#">PMP</a><br /><small>8,24,56,311 students</small></li>
                    </ul>
                    <ul className="list3">
                        <li><h4>IT & Software</h4></li>
                        <li className="list-items"><a href="#">AWS Certification</a><br /><small>94,56,311 students</small></li>
                        <li className="list-items"><a href="#">Ethical Hacking</a><br /><small>94,56,311 students</small></li>
                        <li className="list-items"><a href="#">Cyber Security</a><br /><small>94,56,311 students</small></li>
                    </ul>
                    <ul className="list4">
                        <li><h4>Design</h4></li>
                        <li className="list-items"><a href="#">Photoshop</a><br /><small>94,56,311 students</small></li>
                        <li className="list-items"><a href="#">Graphics Design</a><br /><small>94,56,311 students</small></li>
                        <li className="list-items"><a href="#">Drawing</a><br /><small>94,56,311 students</small></li>
                    </ul>


                </div>
            </div>

        </div>
    )
}