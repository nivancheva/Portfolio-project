import React from "react";
import "./ITTraning.css"
import ITTraningItem from "./ITTrainingItem";
import image1 from "../images/one-results-summary.png";
import image2 from "../images/base-apparel.png";
import image3 from "../images/faq-accordion-card.png";

export default function ITTraning() {
    return (
        <>
            <h1>IT Traning</h1>
            <p>
                I've started my journey in January this year by
                learning HTML and CSS from the documentation at W3School
                and MDN web docs. When i gain some knowledge i
                started doing chalanges from Frontend Mentor.
                When i started learning Javascript I enrolled in
                codecademy courses. You will be able to see more about
                the projects and certificates acquired during my traning in 
                in my github page.
            </p>
            <ul>
                <ITTraningItem
                    title="One Results summary component"
                    image={image1}
                    description="A sample project"
                />
                <ITTraningItem
                    title="Base apparel coming soon master"
                    image={image2}
                    description="A sample project"
                />
                <ITTraningItem
                    title="Faq accordion card main"
                    image={image3}
                    description="A sample project"
                />
            </ul>
            
        </>
    )
}