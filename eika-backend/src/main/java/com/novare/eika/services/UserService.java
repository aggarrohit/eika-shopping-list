package com.novare.eika.services;

import com.novare.eika.exceptions.UserAlreadyExistException;
import com.novare.eika.exceptions.UserNotFoundException;
import com.novare.eika.models.User;
import com.novare.eika.repositories.UserRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

@Service
@Validated
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public User getUserByEmail(String email){
        User user = userRepository.findByEmail(email);
        if(user==null) throw new UserNotFoundException("email : "+email);
        return user;
    }

    public ResponseEntity<User> addUser(@Valid User user){
        User searchedUser = userRepository.findByEmail(user.getEmail());
        if(searchedUser!=null){
            throw new UserAlreadyExistException("User already exists!! Please login..");
        }else{
            user.setHashedPassword(passwordEncoder.encode(user.getPassword()));
            return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
        }

    }

}
