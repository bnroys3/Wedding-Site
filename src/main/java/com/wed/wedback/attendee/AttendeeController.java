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

    @PostMapping("/add-attendee")
    public ResponseEntity<String> postAttendee(@RequestBody AttendeeRequest attendeeRequest) {
        

        String password = attendeeRequest.getPassword();
        Attendee attendee = attendeeRequest.getAttendee();

        if(attendeeService.addAttendee(password, attendee)) {
            return ResponseEntity.ok("Attendee added.");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid password. Please restart session.");
        }
    }
    
}
