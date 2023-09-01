package com.novare.eika.controllers;
import com.novare.eika.models.User;
import com.novare.eika.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;


    @PostMapping("/register")
    ResponseEntity<User> registerUser(@RequestBody User user){
        return userService.addUser(user);
    }

}
