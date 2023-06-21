package com.example.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public ResponseEntity<User> createUser(User user) {
        try {
            User _user = userRepository.save(user);
            return new ResponseEntity<User>(_user, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // @Override
    // public ResponseEntity<List<User>> getAllUsers(String username) {
    //     try {
    //         List<User> users = new ArrayList<User>();
    //         if (username == null) {
    //             userRepository.findAll().forEach(users::add);
    //         } else {
    //             userRepository.findByName(username).forEach(users::add);
    //         }
    //         if(users.isEmpty()) {
    //             return new ResponseEntity<List<User>>(users, HttpStatus.NO_CONTENT);
    //         }
    //         return new ResponseEntity<List<User>>(users, HttpStatus.OK); 
    //     } catch (Exception e) {
    //         return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    //     }
    // }

    @Override
    public ResponseEntity<List<User>> getAllUsers(Long id) {
        try {
            List<User> users = new ArrayList<User>();
            if (id == null) {
                userRepository.findAll().forEach(users::add);
            } else {
                userRepository.findById(id);
            }
            if(users.isEmpty()) {
                return new ResponseEntity<List<User>>(users, HttpStatus.NOT_FOUND);
            }
            return new ResponseEntity<List<User>>(users, HttpStatus.OK); 
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<User> getUser(Long id) {
        Optional<User> user = userRepository.findById(id);

        if(user.isPresent()) {
            return new ResponseEntity<User>(user.get(), HttpStatus.ACCEPTED);
        } else{
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<User> updateUser(Long id, User user) {
        Optional<User> _user = userRepository.findById(id);

        if (_user.isPresent()) {
            User userData = _user.get();
            userData.setUsername(user.getUsername());
            userData.setName(user.getName());
            userData.setEmail(user.getEmail());
            return new ResponseEntity<User>(userRepository.save(userData), HttpStatus.OK);
        } else {
            return new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<HttpStatus> deleteUser(Long id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
