package com.wed.wedback.attendee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wed.wedback.authentication.AuthenticationService;

//Service used to validate and complete RSVP requests
@Service
public class AttendeeService {

    @Autowired
    private AuthenticationService authenticationService;

    @Autowired
    private AttendeeRepository attendeeRepository;

    AttendeeService(AuthenticationService authenticationService, AttendeeRepository attendeeRepository){
        this.authenticationService = authenticationService;
        this.attendeeRepository = attendeeRepository;
    }

    //function used to validate and complete RSVP requests
    //saves the attendee and returns true if authentication is successful
    //returns false otherwise
    public boolean addAttendee(String password, Attendee attendee){
        
        //attempt authentication via AuthenticationService
        if(authenticationService.authenticate(password)) {

            //add the attendee
            this.attendeeRepository.save(attendee);
            return true;

        } else {
            return false;
        }
    }
}
