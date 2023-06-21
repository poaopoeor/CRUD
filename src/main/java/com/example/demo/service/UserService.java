package com.example.demo.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import com.example.demo.model.User;

@Component
public interface UserService {
    public ResponseEntity<User> createUser(User user);
    public ResponseEntity<List<User>> getAllUsers(Long id);
    public ResponseEntity<User> getUser(Long id);
    public ResponseEntity<User> updateUser(Long id, User user);
    public ResponseEntity<HttpStatus> deleteUser(Long id);
 }
