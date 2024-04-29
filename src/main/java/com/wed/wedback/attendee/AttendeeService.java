package com.wed.wedback.attendee;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wed.wedback.authentication.AuthenticationService;

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

    
    public boolean addAttendee(String password, Attendee attendee){
        if(authenticationService.authenticate(password)) {
            this.attendeeRepository.save(attendee);
            return true;
        } else {
            return false;
        }
    }
}
