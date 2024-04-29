package com.wed.wedback.attendee;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

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


    protected Attendee(){}
    
    protected Attendee(String email, String first, String last, Integer quantity){
        this.email=email;
        this.first=first;
        this.last=last;
        this.quantity=quantity;
    }

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
}
