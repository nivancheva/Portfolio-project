import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { NavLink } from "react-router-dom";
import "./Contact.css"

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <p>Email: example@gmail.com</p>
            <p>Phone: 0879354792</p>
            <div className="icons">

                <NavLink target="blank" to="https://github.com/nivancheva/">
                <   FontAwesomeIcon icon={faGithub} size="2x" />
                </NavLink>

                <NavLink target="blank" to="https://www.linkedin.com/in/nedyalka-ivancheva-39329a102">
                    <FontAwesomeIcon icon={faLinkedin} size="2x"/>
                </NavLink>
              
            </div>
        </>
    )
}