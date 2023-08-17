import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <div>
                <FontAwesomeIcon icon={faGoogle} />
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </>
    )
}