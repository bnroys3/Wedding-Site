package com.wed.wedback.attendee;

public class AttendeeRequest {

    private String password;
    private Attendee attendee;

    public AttendeeRequest(){}

    public AttendeeRequest(String password, Attendee attendee){
        this.password = password;
        this.attendee = attendee;
    }

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
