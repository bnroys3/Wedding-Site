import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Registry({setPage}){

    //set the page property to the registry page route
    useEffect(()=>{
        setPage("/registry")
    }, [setPage]);


    //component html
    return(
        <div>
            <p className="small">Please use the links below to access our registries:</p>
            
            <div className="container col-10 col-sm-5 col-md-3">
                <Link to='https://www.anthropologie.com/' target="_blank" className="btn btn-block btn-light mb-0 px-1 w-100">
                    Anthropologie
                </Link>
                <br></br>
                <Link to='https://www.crateandbarrel.com/' target="_blank" className="btn btn-block btn-light mb-0 px-1 w-100">
                    Crate & Barrel
                </Link>
                <br></br>
                <Link to='https://www.target.com/' target="_blank" className="btn btn-block btn-light mb-0 w-100">
                    Target
                </Link>
            </div>
        </div>  
    );
}   