package com.wed.wedback.authentication;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {
    
    @Value("#{environment.SPRING_SHARED_PASSWORD}")
    private String sharedPassword;

    public boolean authenticate(String password) {
        return password != null && password.equals(sharedPassword);
    }
}
