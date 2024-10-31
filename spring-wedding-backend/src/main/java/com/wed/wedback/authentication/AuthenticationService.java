package com.wed.wedback.authentication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    
    //The shared access password would typically be stored in an environment variable, as shown below
    //@Value("#{environment.SPRING_SHARED_PASSWORD}")
    //for the purpose of the GitHub project, we will validate the password against "github".
    @Value("github")
    private String sharedPassword;

    public boolean authenticate(String password) {
        return password != null && password.equals(sharedPassword);
    }
}
