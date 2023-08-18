import { useState } from "react";
import "./ITTraningItem.css"

export default function ITTraningItem({title, image, description}) {
    const [imageVisible, setImageVisible] = useState(false);

    function toggleImage() {
        setImageVisible(!imageVisible);
    }

    return (
        <>
            <li onClick={toggleImage}>{title}</li>
            { imageVisible && <img src={image}/> }
            { imageVisible && <p>{description}</p> }            
        </>
    );
}