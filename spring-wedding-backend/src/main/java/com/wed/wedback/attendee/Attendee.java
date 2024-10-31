package com.wed.wedback.attendee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

//The attendee entity, this defines the data types of the columns in our repository
@Entity
@Table(name = "Attendees")
public class Attendee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;
    private String email;
    private String first;
    private String last;
    private Integer quantity;
    private Integer kids;
    private String restrictions;

    //no args constructor
    protected Attendee(){}
    
    //all args constructor
    protected Attendee(String email, String first, String last, Integer quantity, Integer kids, String restrictions){

        this.email=email;
        this.first=first;
        this.last=last;
        this.quantity=quantity;
        this.kids=kids;
        this.restrictions=restrictions;

    }


    //getters
    public String getEmail(){
        return this.email;
    }
    public String getFirst(){
        return this.first;
    }
    public String getLast(){
        return this.last;
    }
    public Integer getId(){
        return this.id;
    }
    public Integer getQuantity(){
        return this.quantity;
    }
    public Integer getKids(){
        return this.kids;
    }
    public String getRestrictions(){
        return this.restrictions;
    }
}
