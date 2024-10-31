package com.wed.wedback.attendee;

import org.springframework.data.repository.CrudRepository;

//define our attendee respository using Attendee type
interface AttendeeRepository extends CrudRepository <Attendee, Integer>{
    
}