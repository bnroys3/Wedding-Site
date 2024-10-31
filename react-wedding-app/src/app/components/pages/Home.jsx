import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home({setPage}){

	//set the page property to the home route
    useEffect(()=>{
        setPage("/")
    }, [setPage]);

	//component html
    return(
        <div>
            <img src="coverphoto.jpg" alt="Bride and Groom at Beach" className="col-12 col-sm-6"></img>
            <br></br><br></br>

            <div className="container col-12 col-sm-10 col-md-8 justify-content-center">
                <p className="justify-center small mb-2">
                	We are delighted to announce that we will be married on July 26th in Charlotte, NC, and we would love your attendance.
                </p>
                <p className="justify-center small mt-2 mb-2">
                	Click below for more details!
                </p>
            </div>
            <div className="container col-10 col-sm-5 col-md-3 justify-content-center">
                <Link to="/details" className="btn btn-block btn-light w-100 mt-0">Learn more</Link>
            </div>
        </div>  
    );
}   