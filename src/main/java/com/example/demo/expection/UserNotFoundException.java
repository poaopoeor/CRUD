package com.example.demo.expection;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(Long id) {
        super("Could not found user id " + id);
    }
}
