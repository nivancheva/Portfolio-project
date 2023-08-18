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
                I've started my journey in January this year (2023) by
                learning HTML and CSS from the documentation at W3School
                and MDN web docs. When I gained some knowledge I
                started doing challenges from Frontend Mentor.
                When I started learning Javascript I enrolled in
                Codecademy. You will be able to see more about
                the projects and certificates acquired during my training in 
                in my github and linkedIn pages.
            </p>
            <ul>
                <ITTraningItem
                    title="One Results summary component"
                    image={image1}
                    description="Build out this results summary component"
                />
                <ITTraningItem
                    title="Base apparel coming soon master"
                    image={image2}
                    description="Build out coming soon page"
                />
                <ITTraningItem
                    title="Faq accordion card main"
                    image={image3}
                    description="Build out FAQ accordion card"
                />
            </ul>
            
        </>
    )
}