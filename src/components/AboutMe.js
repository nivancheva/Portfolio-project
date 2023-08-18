import React from "react";
import "./AboutMe.css";
import image from "../images/IMG_8431 - Cut.jpg";

export default function AboutMe() {
    return (
        <div className="grid">
            <div >
                <h1>About Me</h1>
                <p>My name is Nedyalka Ivancheva and
                    I would like to share a little about myself.
                    I used to work as an insurance expert for 2 years
                    but after I realized that there is no opportunity for
                    career growth, I decided to change my career
                    path. I chose the IT sector because nowadays
                    it is one of the most prosperous and necessary fields.
                    Our future is build on this. Even in my work as an insurance
                    expert, when we were dissatisfied with the problems that
                    the system caused. I realized that if it was perfect, there
                    would be no need for experts like me and every user would
                    be able to make their insurance without mediation.
                    In this situation the need for more people to create and
                    maintain these systems is growing.
                </p>
            </div>
            <img src={image} alt="myprofile picture" className="profile-img"/>
        </div>
    )
}