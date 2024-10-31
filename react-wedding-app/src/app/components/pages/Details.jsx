import { useEffect} from "react";
import { Link } from "react-router-dom";

export default function Details({setPage}){

    //set the page property to the details page route
    useEffect(()=>{
        setPage("/details")
    }, [setPage]);

    //component html
    return(
        <div>
            <p className="lead mb-2">
                Friday, July 26, 2024<br></br>
                6:00 pm <br></br>
                1234 Road Street, Charlotte, NC 28215<br></br>
            </p>

            {/* iframe component is used to access the Google Maps Embed API.
            The API key is exposed, but project is only enabled for the free Embed API and has no billing information attached. */}
            <iframe
                title="Location Map"
                className="map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAEoTHxngBsXuroAjy9qp-j4zH5KxcGrzg&q=Charlotte,NC&zoom=10"
                allowFullScreen>
            </iframe>

            <br></br>

            <p className="justify-center small mt-3">
                Outdoor ceremony, followed by indoor reception.<br></br>
                Please <Link to="/rsvp"> RSVP</Link> by June 28.<br></br>
                Dress code: Formal.<br></br><br></br>
                <i>Questions? Please contact (919) 000-0001.</i>
            </p>
        </div>

    );
}