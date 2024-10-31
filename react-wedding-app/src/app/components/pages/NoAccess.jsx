import { useState } from "react";

// The default page when accessing the site.
// Requires a password, verified in backend, to enter to the rest of site.
// Uses a passed password property which will be set here, then used to validate requests from other pages.
export default function NoAccess({setAccess, password, setPassword}){

    const [failedLogin, setFailedLogin] = useState(false);


    //function updates the state of the password property when the input is changed
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    //function handles password submission
    async function handleSubmit(event){
        event.preventDefault();

        //post to login endpoint
        try {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify({password})
            }).then((response) => {
                if(response.ok) {
                    console.log("Login successful.");
                    setFailedLogin(false);
                    setAccess(true);
                } else {
                    setPassword("");
                    setFailedLogin(true);
                    console.log("Login failed.");
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    //component html
    return(
            <form className="form-signin" onSubmit={(event) => handleSubmit(event)}>

                <p className="justify-center small">Please enter the password from your invitation ("github").</p>

                <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required={true}
                    value={password}
                    onChange={(event) => handlePasswordChange(event)}>
                </input>
                
                <button className="btn btn-block btn-light" type="submit">Sign in</button>

                {/* If the login failed, display the error message. */}
                {failedLogin && <p className="bad-password">Login failed.</p>}

            </form>
    );
}   