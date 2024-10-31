import { useEffect, useState} from "react";
import Attendee from "../../types/Attendee.ts";

//Component uses the password property to authenticate RSVP requests to backend
export default function Rsvp({setPage, password}){

    //set the page property to the rsvp page route
    useEffect(()=>{
        setPage("/rsvp")
    }, [setPage]);


    // The below each correspond to an input on the form
    const [attending, setAttending] = useState(true);
    const [restrictions, setRestrictions] = useState(false);
    const [minQty, setMinQty] = useState(1);
    const [maxQty, setMaxQty] = useState(20);
    const [quantity, setQuantity] = useState(1);
    const [kids, setKids] = useState(0);

    // The below are used to toggle whether error/success messages are displayed
    const [failed, setFailed] = useState(false);
    const [successful, setSuccessful] = useState(false);


    // Function handles submitting an RSVP request
    async function handleSubmit(event){
        event.preventDefault();

        try {
            // Form String data is collected
            let formData = new FormData(event.target);
            let email = formData.get('inputEmail');
            let first = formData.get('inputFirst');
            let last = formData.get('inputLast');
            let specifyRestrictions = formData.get('inputSpecifyRestrictions');

            // Form data and state variables are compiled to create attendee dto instance
            let attendee = new Attendee(email, first, last, quantity, kids, specifyRestrictions);

            // Request is made to the add-attendee endpoint using the initial login password as authentication within the body.
            fetch('/add-attendee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({password, attendee})
                
            }).then((response) => {
                if(response.ok) {
                    //Handle successful response
                    console.log("RSVP successful.");
                    setFailed(false);
                    setSuccessful(true);
                } else {
                    //Handle bad response
                    setFailed(true);
                    setSuccessful(false);
                    console.log("RSVP failed.");
                }
            })
        } catch (e) {
            console.log(e);
        }
    }


    // Update the restrictions state upon the form data being updated
    function handleRestrictionsChange(event){
        if(event.target.value==="Y"){
            setRestrictions(true);
        } else {
            setRestrictions(false);
        }
    }

    // Update the attending state upon the form data being updated
    // also updates min/max quantities to prevent invalid data to be submitted via the form
    function handleAttendingChange(event){
        
        if(event.target.value==="Y"){
            //update max and min quantities if attending
            setAttending(true);
            setMaxQty(20);
            setMinQty(1);
            
            if(quantity===0){
                setQuantity(1);
            }
        } else {
            //update max and min quantities to 0 if not attending
            setAttending(false);
            setMaxQty(0);
            setMinQty(0);
            setQuantity(0);
            setKids(0);
        }
    }

    //update adult quanity upon form data change
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    //update child quanity upon form value change
    function handleKidsChange(event){
        setKids(event.target.value);
    }

    

    //component html
    return(
        <form className="form-rsvp" onSubmit={handleSubmit}>

            <p className="lead">Please RSVP by June 28.</p>
            <p className="small"><i>We kindly request that you do not bring a plus one unless it was specified on your invitation.</i></p>

            <input 
                type="text"
                name="inputFirst"
                className="form-control form-inline-left" 
                placeholder="First" 
                required={true}>
            </input>
            <input 
                type="text" 
                name="inputLast" 
                className="form-control form-inline" 
                placeholder="Last" 
                required={true}>
            </input>

            <input 
                type="email" 
                name="inputEmail" 
                className="form-control mt-2 mb-2" 
                placeholder="Email" 
                required={true}>
            </input>

            <span className="form-inline-container w-100 mt-3 mb-3">
                <p className="form-inline-prompt">Are you attending?</p>
                <input type="radio"
                    id="inputRsvpYes"
                    name="inputRsvp"
                    className="mt-2"
                    value="Y"
                    checked={attending===true}
                    onChange={handleAttendingChange}>
                </input>
                <label className="form-inline-container" htmlFor="inputRsvpYes">Yes</label>

                <input type="radio"
                    id="inputRsvpNo"
                    name="inputRsvp"
                    className="mt-2"
                    value="N"
                    checked={attending===false}
                    onChange={handleAttendingChange}>
                </input>
                <label className="form-inline-container" htmlFor="inputRsvpNo">No</label>
            </span>

            <span className="form-inline-container w-100">
                <p className="form-inline-prompt">Number of adult meals for party:</p>
                <input type="number"
                    id="inputQty" 
                    className="form-control form-inline form-number-input" 
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={minQty} 
                    max={maxQty} 
                    required={true}></input>
            </span>

            <span className="form-inline-container w-100 mb-1">
                <p className="form-inline-prompt">Number of kid's meals for party:&nbsp;</p>
                <input type="number"
                    id="inputKids" 
                    className="form-control form-inline form-number-input" 
                    value={kids}
                    onChange={handleKidsChange}
                    min={0} 
                    max={maxQty} 
                    required={true}></input>
            </span>

            <span className="form-inline-container">
                <p className="form-inline-prompt">Do you have any special dietary needs?</p>
                <input type="radio"
                    id="inputRestrictionsYes"
                    name="inputRestrictions"
                    value="Y"
                    className="mt-2 me-0 pe-0"
                    checked={restrictions===true}
                    onChange={handleRestrictionsChange}>
                </input>
                <label className="form-inline-container" htmlFor="inputRestrictionsYes">Yes</label>

                <input type="radio"
                    id="inputRestrictionsNo"
                    name="inputRestrictions"
                    value="N"
                    className="mt-2"
                    checked={restrictions===false}
                    onChange={handleRestrictionsChange}>
                </input>
                <label className="form-inline-container" htmlFor="inputRestrictionsNo">No</label>
            </span>

            {/* Display the restrictions text input if the restrictions 'yes' has been selected */}
            {restrictions &&
            <input
                type="text" 
                name="inputSpecifyRestrictions" 
                className="form-control mt-2" 
                placeholder="Specify dietary needs" 
                required={true}>
            </input>
            }

            <button className="btn btn-light btn-block mt-3" type="submit">Submit</button>

            {/* Display error/success messages upon RSVP fail/success via state variables */}
            {failed && <p className="bad-password">RSVP unsuccessful. Please contact (919) 000-0001.</p>}
            {successful && <p className="good-msg">RSVP success!</p>}

        </form>
    );
}