import React from "react";
import "./AboutMe.css";
import image from "../images/IMG_8431.jpg";

export default function AboutMe() {
    return (
        <div className="grid">
            <div >
                <h1>About Me</h1>
                <p>My name is Nedyalka Ivancheva, but you can call me Neli. 
                    I would like to tell a litlle more about myself.
                    I used to work as un insuranse expert for 2 years
                    but after realization that there is no oportunity for
                    career growth, I've decided to change my career
                    path. I chose the IT sector because nowadays
                    it is one of the most prosperous and necessery fields.
                    Our future is build on this. Even in my work as an insurance
                    expert, when we were dissatisfied whith the problems that
                    the system caused. I realized that if it was perfect, there
                    would be no need for experts like me and every user would
                    be able to make and get insurance that he needs without mediation.
                    In this situation the need for people to create and
                    mentain these systems is growing.
                </p>
            </div>
            <img src={image} alt="myprofile picture" className="profile-img"/>
        </div>
    )
}