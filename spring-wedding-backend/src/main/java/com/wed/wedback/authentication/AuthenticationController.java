package com.wed.wedback.authentication;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService){
        this.authenticationService = authenticationService;
    }

    //Login endpoint: used to authenticate user against the shared password.
    @PostMapping("/login")
    public ResponseEntity<String> postPassword(@RequestBody AuthenticationRequest authenticationRequest) {

        String password = authenticationRequest.getPassword();
        
        //Attempt authentication
        if(authenticationService.authenticate(password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Password");
        }
    }
}
