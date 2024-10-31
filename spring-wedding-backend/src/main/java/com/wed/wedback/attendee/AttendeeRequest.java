package com.wed.wedback.attendee;

//RSVP request object
//Contains a password to authenticate the request
//as well as an attendee entity
public class AttendeeRequest {

    private String password;
    private Attendee attendee;

    //no args constructor
    public AttendeeRequest(){}

    //all args constructor
    public AttendeeRequest(String password, Attendee attendee){
        this.password = password;
        this.attendee = attendee;
    }
    

    //getters/setters
    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }
    
    public Attendee getAttendee(){
        return this.attendee;
    }

    public void setAttendee(Attendee attendee){
        this.attendee = attendee;
    }
}
