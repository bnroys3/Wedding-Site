package com.wed.wedback.attendee;

import org.springframework.web.bind.annotation.RestController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AttendeeController {
    
    @Autowired
    private AttendeeService attendeeService;

    public AttendeeController(AttendeeService attendeeService){
        this.attendeeService = attendeeService;
    }

    //this endpoint is used for RSVP requests
    //requires the shared password to be sent in the request
    @PostMapping("/add-attendee")
    public ResponseEntity<String> postAttendee(@RequestBody AttendeeRequest attendeeRequest) {
        
        String password = attendeeRequest.getPassword();
        Attendee attendee = attendeeRequest.getAttendee();

        //attempt to add the attendee
        if(attendeeService.addAttendee(password, attendee)) {
            return ResponseEntity.ok("Attendee added.");
        } else {
            //the addAttendee function only returns false when the authentication fails
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password. Please restart session.");
        }
    }
    
}
