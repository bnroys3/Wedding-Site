import { useEffect } from "react";

export default function Gallery({setPage}){

    //set the page property to the gallery page route
    useEffect(()=>{
        setPage("/gallery")
    }, [setPage]);

    //create list of images to display all in the /public/gallery folder on this page
    const images = require.context('../../../../public/gallery', true);
    const imageList = images.keys().map(image => images(image));

    //component html
    return(
        <div>
            { /* This function maps each image from imageList to an html element .*/
                imageList.map((image, index) => (
                    <img key={index} src={image} alt={`Bride and Groom ${index}`} className="col-12 col-sm-6 p-3"/>
                ))
            }
        </div>
    );
}