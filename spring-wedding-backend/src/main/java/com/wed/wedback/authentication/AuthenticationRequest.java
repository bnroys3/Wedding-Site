package com.wed.wedback.authentication;

//Authentication request object
public class AuthenticationRequest {

    private String password;

    public AuthenticationRequest(){
    }

    public AuthenticationRequest(String password){
        this.password = password;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }
}
