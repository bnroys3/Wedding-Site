import {Link} from 'react-router-dom';

//Bootstrap navbar component
function NavBar({page}){

    return(

        <nav className="navbar navbar-expand fixed-top justify-content-center pb-0 border-bottom border-white small" >
        
            {/* Div containing list of page links */}
            <div className="navbar-nav">
                <Link className={page==="/"?"nav-item nav-link active":"nav-item nav-link"} to="/">Home</Link>
                <Link className={page==="/details"?"nav-item nav-link active":"nav-item nav-link"} to="/details">Details</Link>
                <Link className={page==="/gallery"?"nav-item nav-link active":"nav-item nav-link"} to="/gallery">Gallery</Link>
                <Link className={page==="/registry"?"nav-item nav-link active":"nav-item nav-link"} to="/registry">Registry</Link>
                <Link className={page==="/rsvp"?"nav-item nav-link active":"nav-item nav-link"} to="/rsvp">RSVP</Link>
            </div>
        </nav>

    );

} export default NavBar;
